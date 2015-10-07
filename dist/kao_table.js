$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.table", []).directive("kaoTable", function() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        entries: "=",
        columns: "="
      },
      template: "<table class=\"table table-striped table-bordered\">     <tr>         <th ng-repeat=\"column in columns\">{{column.name}}</th>     </tr>     <tr ng-repeat=\"entry in entries\" class=\"{{entry.rowClass}}\">         <td ng-repeat=\"column in columns\">{{entry[column.path]}}</td>     </tr> </table>"
    };
  });
  return {};
});

//# sourceMappingURL=kao_table.map
