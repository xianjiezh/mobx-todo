class StoreManager {
  storeObjectTree = {};
  register = (storeName, store) => {
    if (this.storeObjectTree[storeName]) {
      throw new Error(`已经存在${storeName}的store，请更换moduleName`);
    }
    this.storeObjectTree[storeName] = store;
  };
  getStores = () => {
    return { ...this.storeObjectTree };
  };
  getStore = storeName => {
    if (!this.storeObjectTree[storeName]) {
      throw new Error(`不存在${storeName}的store`);
    }
    return this.storeObjectTree[storeName];
  };
}

export default new StoreManager();
