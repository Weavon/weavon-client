import { decrypt, encrypt } from "@/utils/encryptUtils";

const encryptSessionStorage = {
  getItem: (name: string) => {
    const item = sessionStorage.getItem(name);

    if (item) {
      return decrypt(item);
    }

    return null;
  },
  setItem: (name: string, value: string) => {
    const cipherText = encrypt(value);
    sessionStorage.setItem(name, cipherText);
  },
  removeItem: (name: string) => {
    sessionStorage.removeItem(name);
  },
};

export default encryptSessionStorage;
