System.register(["angular2/core", "../docs/docs.component", "../index/index.component", "../flex/flex.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, docs_component_1, index_component_1, flex_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (docs_component_1_1) {
                docs_component_1 = docs_component_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (flex_component_1_1) {
                flex_component_1 = flex_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        directives: [docs_component_1.DocsComponent, index_component_1.IndexComponent, flex_component_1.FlexComponent],
                        styleUrls: [
                            "app/shared/styles/body.css",
                            "app/shared/styles/btn.css"
                        ],
                        encapsulation: core_1.ViewEncapsulation.None,
                        template: "\n\t\t<main class=\"main\">\n\t\t\t<index></index>\n\t\t\t<flex></flex>\n\t\t\t<docs></docs>\n\t\t</main>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
