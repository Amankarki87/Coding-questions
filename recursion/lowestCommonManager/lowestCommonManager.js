function getLowestCommonManager(topManager, reportOne, reportTwo) {
    return getOrgInfo(topManager,reportOne,reportTwo).lowestCommonManager;
}
  
  // This is an input class. Do not edit.
  class OrgChart {
      constructor(name) {
          this.name = name;
          this.directReports = [];
        }
  }