import { Ext } from '../../constants/ext';

export const get = <T>(key: string, allowError = false): Promise<T> =>
  new Promise((resolve, reject) => {
    Ext.storage.local.get(key).then((res: any) => {
      const value = res[key];

      if (!value && allowError) {
        return reject(
          new Error(`Key "${key}" was not found in Chrome Storage!`)
        );
      }

      resolve(value);
    });
  });

export const set = <T>(key: string, value: T) =>
  new Promise((resolve, reject) => {
    Ext.storage.local.set({ [key]: value }).then(() => resolve(true));
  });
