(function(){var e={8440:function(){},9219:function(e,a,t){"use strict";var i=t(144),l=function(){var e=this,a=e._self._c;e._self._setupProxy;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view",{key:e.$route.path})],1)},s=[],r=t(8440),n=t.n(r),o=n(),c=t(1001),m=(0,c.Z)(o,l,s,!1,null,null,null),d=m.exports,g=t(8345),y=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container container--lookup"},[a("h1",[e._v("FGO Dropsheet Lookup Tool")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("SheetSelector",{attrs:{sheetId:e.sheetId},on:{"handle-sheet-select":e.handleSheetSelect}})],1),a("div",{staticClass:"col-sm-12"},[a("MatSelectorVisual",{attrs:{matRanges:e.matRanges,region:e.region,isClosed:e.isClosed,triggerReset:e.triggerReset},on:{"handle-mat-select":e.handleMatSelect,"handle-mat-toggle":e.handleMatToggle,"handle-trigger-reset":e.handleTriggerReset}})],1),a("div",{staticClass:"col-sm-12"},[a("ErrorMsg",{attrs:{errorMsg:e.errorMsg}})],1),a("div",{staticClass:"col-sm-12 container--button"},[a("button",{staticClass:"button--reset",attrs:{type:"button"},on:{click:function(a){return e.handleReset()}}},[e._v(" reset ")]),a("button",{staticClass:"button--link",attrs:{type:"button"},on:{click:function(a){return e.handleLink()}}},[e._v(" link ")])])]),a("SearchLink",{attrs:{searchLink:e.searchLink}}),e.isLoading?a("div",{staticClass:"overlay--loading"},[a("span",[e._v("loading...")])]):e._e(),a("Results",{attrs:{results:e.results}})],1)},h=[],v=(t(7658),t(9669)),u=t.n(v);const f="https://sheets.googleapis.com/v4/spreadsheets/",p="1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA",R="AIzaSyBOU6FQA09_mZnAmZBZ4YRt1NCEb0xTUbg",L=[{title:"Best 5 AP/Drop (JP)",sheetId:"843570146",sheetUrl:"Best%205%20AP%2FDrop%20%28JP%29"},{title:"Best 5 Droprate (JP)",sheetId:"263109949",sheetUrl:"Best%205%20Droprate%20%28JP%29"},{title:"Best 5 AP/Drop (NA)",sheetId:"1676231111",sheetUrl:"Best%205%20AP%2FDrop%20%28NA%29"},{title:"Best 5 Droprate (NA)",sheetId:"1587228013",sheetUrl:"Best%205%20Droprate%20%28NA%29"}],b=[{name:"Proof of Hero",startRange:"D5",endRange:"N9",rarity:"bronze",type:"mat",availability:"ALL",filename:"6503"},{name:"Evil Bone",startRange:"D10",endRange:"N14",rarity:"bronze",type:"mat",availability:"ALL",filename:"6516"},{name:"Dragon Fang",startRange:"D15",endRange:"N19",rarity:"bronze",type:"mat",availability:"ALL",filename:"6512"},{name:"Void's Dust",startRange:"D20",endRange:"N24",rarity:"bronze",type:"mat",availability:"ALL",filename:"6505"},{name:"Fool's Chain",startRange:"D25",endRange:"N29",rarity:"bronze",type:"mat",availability:"ALL",filename:"6522"},{name:"Deadly Poisonous Needle",startRange:"D30",endRange:"N34",rarity:"bronze",type:"mat",availability:"ALL",filename:"6527"},{name:"Mystic Spinal Fluid",startRange:"D35",endRange:"N39",rarity:"bronze",type:"mat",availability:"ALL",filename:"6530"},{name:"Stake of Wailing Night",startRange:"D42",endRange:"N46",rarity:"bronze",type:"mat",availability:"ALL",filename:"6533"},{name:"Mystic Gunpowder",startRange:"D47",endRange:"N51",rarity:"bronze",type:"mat",availability:"ALL",filename:"6534"},{name:"Small Bells of Absolution",startRange:"D52",endRange:"N56",rarity:"bronze",type:"mat",availability:"JP",filename:"6549"},{name:"Twilight Ceremonial Blade",startRange:"D57",endRange:"N61",rarity:"bronze",type:"mat",availability:"JP",filename:"6551"},{name:"Unforgettable Ashes",startRange:"D62",endRange:"N66",rarity:"bronze",type:"mat",availability:"JP",filename:"6552"},{name:"Obsidian Edge",startRange:"D67",endRange:"N71",rarity:"silver",type:"mat",availability:"JP",filename:"6554"},{name:"Seed of Yggdrasil",startRange:"D72",endRange:"N76",rarity:"silver",type:"mat",availability:"ALL",filename:"6502"},{name:"Ghost Lantern",startRange:"D79",endRange:"N83",rarity:"silver",type:"mat",availability:"ALL",filename:"6508"},{name:"Octuplet Crystal",startRange:"D84",endRange:"N88",rarity:"silver",type:"mat",availability:"ALL",filename:"6515"},{name:"Serpent Jewel",startRange:"D89",endRange:"N93",rarity:"silver",type:"mat",availability:"ALL",filename:"6509"},{name:"Phoenix Feather",startRange:"D94",endRange:"N98",rarity:"silver",type:"mat",availability:"ALL",filename:"6501"},{name:"Eternal Gear",startRange:"D99",endRange:"N103",rarity:"silver",type:"mat",availability:"ALL",filename:"6510"},{name:"Forbidden Page",startRange:"D104",endRange:"N108",rarity:"silver",type:"mat",availability:"ALL",filename:"6511"},{name:"Homunculus Baby",startRange:"D109",endRange:"N113",rarity:"silver",type:"mat",availability:"ALL",filename:"6514"},{name:"Meteor Horseshoe",startRange:"D116",endRange:"N120",rarity:"silver",type:"mat",availability:"ALL",filename:"6513"},{name:"Great Knight Medal",startRange:"D121",endRange:"N125",rarity:"silver",type:"mat",availability:"ALL",filename:"6524"},{name:"Shell of Reminiscence",startRange:"D126",endRange:"N130",rarity:"silver",type:"mat",availability:"ALL",filename:"6526"},{name:"Refined Magatama",startRange:"D131",endRange:"N135",rarity:"silver",type:"mat",availability:"ALL",filename:"6532"},{name:"Eternal Ice",startRange:"D136",endRange:"N140",rarity:"silver",type:"mat",availability:"ALL",filename:"6535"},{name:"Giant's Ring",startRange:"D141",endRange:"N145",rarity:"silver",type:"mat",availability:"ALL",filename:"6537"},{name:"Aurora Steel",startRange:"D146",endRange:"N150",rarity:"silver",type:"mat",availability:"ALL",filename:"6536"},{name:"Soundless Bell",startRange:"D153",endRange:"N157",rarity:"silver",type:"mat",availability:"ALL",filename:"6538"},{name:"Arrowhead of Malice",startRange:"D158",endRange:"N162",rarity:"silver",type:"mat",availability:"ALL",filename:"6541"},{name:"Crown of Silvery Light",startRange:"D163",endRange:"N167",rarity:"silver",type:"mat",availability:"ALL",filename:"6543"},{name:"Divine Spiritron",startRange:"D168",endRange:"N172",rarity:"silver",type:"mat",availability:"ALL",filename:"6545"},{name:"Ball of Rainbow Thread",startRange:"D173",endRange:"N177",rarity:"silver",type:"mat",availability:"ALL",filename:"6547"},{name:"Scales of Fantasy",startRange:"D178",endRange:"N182",rarity:"silver",type:"mat",availability:"JP",filename:"6550"},{name:"Sunscale",startRange:"D183",endRange:"N187",rarity:"silver",type:"mat",availability:"JP",filename:"6553"},{name:"Claw of Chaos",startRange:"D190",endRange:"N194",rarity:"gold",type:"mat",availability:"ALL",filename:"6507"},{name:"Heart of the Foreign God",startRange:"D195",endRange:"N199",rarity:"gold",type:"mat",availability:"ALL",filename:"6517"},{name:"Dragon's Reverse Scale",startRange:"D200",endRange:"N204",rarity:"gold",type:"mat",availability:"ALL",filename:"6506"},{name:"Spirit Root",startRange:"D205",endRange:"N209",rarity:"gold",type:"mat",availability:"ALL",filename:"6518"},{name:"Warhorse's Young Horn",startRange:"D210",endRange:"N214",rarity:"gold",type:"mat",availability:"ALL",filename:"6519"},{name:"Tearstone of Blood",startRange:"D215",endRange:"N219",rarity:"gold",type:"mat",availability:"ALL",filename:"6520"},{name:"Black Beast Grease",startRange:"D220",endRange:"N224",rarity:"gold",type:"mat",availability:"ALL",filename:"6521"},{name:"Egg of Truth",startRange:"D227",endRange:"N231",rarity:"gold",type:"mat",availability:"ALL",filename:"6542"},{name:"Fragment of a Twinkling Star",startRange:"D232",endRange:"N236",rarity:"gold",type:"mat",availability:"ALL",filename:"6544"},{name:"Fruit of Eternity",startRange:"D237",endRange:"N241",rarity:"gold",type:"mat",availability:"ALL",filename:"6546"},{name:"Demon Flame Lantern",startRange:"D242",endRange:"N246",rarity:"gold",type:"mat",availability:"ALL",filename:"6548"},{name:"Lamp of Evil-Sealing",startRange:"T190",endRange:"AD194",rarity:"gold",type:"mat",availability:"ALL",filename:"6523"},{name:"Scarab of Wisdom",startRange:"T195",endRange:"AD199",rarity:"gold",type:"mat",availability:"ALL",filename:"6525"},{name:"Primordial Lanugo",startRange:"T200",endRange:"AD204",rarity:"gold",type:"mat",availability:"ALL",filename:"6528"},{name:"Cursed Beast Gallstone",startRange:"T205",endRange:"AD209",rarity:"gold",type:"mat",availability:"ALL",filename:"6529"},{name:"Mysterious Divine Wine",startRange:"T210",endRange:"AD214",rarity:"gold",type:"mat",availability:"ALL",filename:"6531"},{name:"Reactor Core of Dawn",startRange:"T215",endRange:"AD219",rarity:"gold",type:"mat",availability:"ALL",filename:"6539"},{name:"Tsukumo Mirror",startRange:"T2120",endRange:"AD224",rarity:"gold",type:"mat",availability:"ALL",filename:"6540"},{name:"Secret Gem of Saber",startRange:"T5",endRange:"AD9",rarity:"gold",type:"skill",availability:"ALL",filename:"6201"},{name:"Secret Gem of Archer",startRange:"T10",endRange:"AD14",rarity:"gold",type:"skill",availability:"ALL",filename:"6202"},{name:"Secret Gem of Lancer",startRange:"T15",endRange:"AD19",rarity:"gold",type:"skill",availability:"ALL",filename:"6203"},{name:"Secret Gem of Rider",startRange:"T20",endRange:"AD24",rarity:"gold",type:"skill",availability:"ALL",filename:"6204"},{name:"Secret Gem of Caster",startRange:"T25",endRange:"AD29",rarity:"gold",type:"skill",availability:"ALL",filename:"6205"},{name:"Secret Gem of Assassin",startRange:"T30",endRange:"AD34",rarity:"gold",type:"skill",availability:"ALL",filename:"6206"},{name:"Secret Gem of Berserker",startRange:"T35",endRange:"AD39",rarity:"gold",type:"skill",availability:"ALL",filename:"6207"},{name:"Magic Gem of Saber",startRange:"T42",endRange:"AD46",rarity:"silver",type:"skill",availability:"ALL",filename:"6101"},{name:"Magic Gem of Archer",startRange:"T47",endRange:"AD51",rarity:"silver",type:"skill",availability:"ALL",filename:"6102"},{name:"Magic Gem of Lancer",startRange:"T52",endRange:"AD56",rarity:"silver",type:"skill",availability:"ALL",filename:"6103"},{name:"Magic Gem of Rider",startRange:"T57",endRange:"AD61",rarity:"silver",type:"skill",availability:"ALL",filename:"6104"},{name:"Magic Gem of Caster",startRange:"T62",endRange:"AD66",rarity:"silver",type:"skill",availability:"ALL",filename:"6105"},{name:"Magic Gem of Assassin",startRange:"T67",endRange:"AD71",rarity:"silver",type:"skill",availability:"ALL",filename:"6106"},{name:"Magic Gem of Berserker",startRange:"T72",endRange:"AD76",rarity:"silver",type:"skill",availability:"ALL",filename:"6107"},{name:"Gem of Saber",startRange:"T79",endRange:"AD83",rarity:"bronze",type:"skill",availability:"ALL",filename:"6001"},{name:"Gem of Archer",startRange:"T84",endRange:"AD88",rarity:"bronze",type:"skill",availability:"ALL",filename:"6002"},{name:"Gem of Lancer",startRange:"T89",endRange:"AD93",rarity:"bronze",type:"skill",availability:"ALL",filename:"6003"},{name:"Gem of Rider",startRange:"T94",endRange:"AD98",rarity:"bronze",type:"skill",availability:"ALL",filename:"6004"},{name:"Gem of Caster",startRange:"T99",endRange:"AD103",rarity:"bronze",type:"skill",availability:"ALL",filename:"6005"},{name:"Gem of Assassin",startRange:"T104",endRange:"AD108",rarity:"bronze",type:"skill",availability:"ALL",filename:"6006"},{name:"Gem of Berserker",startRange:"T109",endRange:"AD113",rarity:"bronze",type:"skill",availability:"ALL",filename:"6007"},{name:"Saber Monument",startRange:"T116",endRange:"AD120",rarity:"gold",type:"ascension",availability:"ALL",filename:"7101"},{name:"Archer Monument",startRange:"T121",endRange:"AD125",rarity:"gold",type:"ascension",availability:"ALL",filename:"7102"},{name:"Lancer Monument",startRange:"T126",endRange:"AD130",rarity:"gold",type:"ascension",availability:"ALL",filename:"7103"},{name:"Rider Monument",startRange:"T131",endRange:"AD135",rarity:"gold",type:"ascension",availability:"ALL",filename:"7104"},{name:"Caster Monument",startRange:"T136",endRange:"AD140",rarity:"gold",type:"ascension",availability:"ALL",filename:"7105"},{name:"Assassin Monument",startRange:"T141",endRange:"AD145",rarity:"gold",type:"ascension",availability:"ALL",filename:"7106"},{name:"Berserker Monument",startRange:"T146",endRange:"AD150",rarity:"gold",type:"ascension",availability:"ALL",filename:"7107"},{name:"Saber Piece",startRange:"T153",endRange:"AD157",rarity:"silver",type:"ascension",availability:"ALL",filename:"7001"},{name:"Archer Piece",startRange:"T158",endRange:"AD162",rarity:"silver",type:"ascension",availability:"ALL",filename:"7002"},{name:"Lancer Piece",startRange:"T163",endRange:"AD167",rarity:"silver",type:"ascension",availability:"ALL",filename:"7003"},{name:"Rider Piece",startRange:"T168",endRange:"AD172",rarity:"silver",type:"ascension",availability:"ALL",filename:"7004"},{name:"Caster Piece",startRange:"T173",endRange:"AD177",rarity:"silver",type:"ascension",availability:"ALL",filename:"7005"},{name:"Assassin Piece",startRange:"T178",endRange:"AD182",rarity:"silver",type:"ascension",availability:"ALL",filename:"7006"},{name:"Berserker Piece",startRange:"T183",endRange:"AD187",rarity:"silver",type:"ascension",availability:"ALL",filename:"7007"}];var A=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container--sheet-selector"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.sheetUrl,expression:"sheetUrl"}],ref:"sheetSelector",on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.sheetUrl=a.target.multiple?t:t[0]},e.handleChange]}},e._l(e.sheetIds,(function(t){return a("option",{key:t.sheetId,attrs:{"data-key":t.sheetId},domProps:{value:t.sheetUrl}},[e._v(e._s(t.title))])})),0)])},k=[],C={name:"SheetSelector",props:{sheetId:String},data(){return{sheetIds:L,sheetUrl:"Best%205%20AP%2FDrop%20%28JP%29"}},methods:{handleChange(e){""!==e.target.value?this.$emit("handle-sheet-select",{key:e.target.querySelector(":checked").getAttribute("data-key"),value:e.target.value}):this.$emit("handle-sheet-select",{key:"",value:""})}},mounted:function(){const e=this.$refs.sheetSelector.querySelector("option"),a=e.getAttribute("data-key"),t=e.value;this.$emit("handle-sheet-select",{key:a,value:t})},watch:{sheetId:{immediate:!1,handler(e){const a=this.$refs.sheetSelector.querySelector('option[data-key="'+e+'"').value;this.sheetUrl=a}}}},D=C,_=(0,c.Z)(D,A,k,!1,null,"40323432",null),T=_.exports,F=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container--mat-selector"},[a("div",{staticClass:"container--mat-filter container-fluid"},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter gold",attrs:{type:"checkbox",id:"gold",value:"gold"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"gold")>-1:e.matRarityFilter},on:{change:[function(a){var t=e.matRarityFilter,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s="gold",r=e._i(t,s);i.checked?r<0&&(e.matRarityFilter=t.concat([s])):r>-1&&(e.matRarityFilter=t.slice(0,r).concat(t.slice(r+1)))}else e.matRarityFilter=l},e.handleFilter]}}),a("label",{attrs:{for:"gold"}},[e._v("gold")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter silver",attrs:{type:"checkbox",id:"silver",value:"silver"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"silver")>-1:e.matRarityFilter},on:{change:[function(a){var t=e.matRarityFilter,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s="silver",r=e._i(t,s);i.checked?r<0&&(e.matRarityFilter=t.concat([s])):r>-1&&(e.matRarityFilter=t.slice(0,r).concat(t.slice(r+1)))}else e.matRarityFilter=l},e.handleFilter]}}),a("label",{attrs:{for:"silver"}},[e._v("silver")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matRarityFilter,expression:"matRarityFilter"}],staticClass:"input--checkbox-filter bronze",attrs:{type:"checkbox",id:"bronze",value:"bronze"},domProps:{checked:Array.isArray(e.matRarityFilter)?e._i(e.matRarityFilter,"bronze")>-1:e.matRarityFilter},on:{change:[function(a){var t=e.matRarityFilter,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s="bronze",r=e._i(t,s);i.checked?r<0&&(e.matRarityFilter=t.concat([s])):r>-1&&(e.matRarityFilter=t.slice(0,r).concat(t.slice(r+1)))}else e.matRarityFilter=l},e.handleFilter]}}),a("label",{attrs:{for:"bronze"}},[e._v("bronze")])])]),a("div",{staticClass:"row"},[e._m(1),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter mat",attrs:{type:"checkbox",id:"mat",value:"mat"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"mat")>-1:e.matTypeFilter},on:{change:[function(a){var t=e.matTypeFilter,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s="mat",r=e._i(t,s);i.checked?r<0&&(e.matTypeFilter=t.concat([s])):r>-1&&(e.matTypeFilter=t.slice(0,r).concat(t.slice(r+1)))}else e.matTypeFilter=l},e.handleFilter]}}),a("label",{attrs:{for:"mat"}},[e._v("mat")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter skill",attrs:{type:"checkbox",id:"skill",value:"skill"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"skill")>-1:e.matTypeFilter},on:{change:[function(a){var t=e.matTypeFilter,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s="skill",r=e._i(t,s);i.checked?r<0&&(e.matTypeFilter=t.concat([s])):r>-1&&(e.matTypeFilter=t.slice(0,r).concat(t.slice(r+1)))}else e.matTypeFilter=l},e.handleFilter]}}),a("label",{attrs:{for:"skill"}},[e._v("gems")])]),a("div",{staticClass:"col-xs-3 col--filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.matTypeFilter,expression:"matTypeFilter"}],staticClass:"input--checkbox-filter ascension",attrs:{type:"checkbox",id:"ascension",value:"ascension"},domProps:{checked:Array.isArray(e.matTypeFilter)?e._i(e.matTypeFilter,"ascension")>-1:e.matTypeFilter},on:{change:[function(a){var t=e.matTypeFilter,i=a.target,l=!!i.checked;if(Array.isArray(t)){var s="ascension",r=e._i(t,s);i.checked?r<0&&(e.matTypeFilter=t.concat([s])):r>-1&&(e.matTypeFilter=t.slice(0,r).concat(t.slice(r+1)))}else e.matTypeFilter=l},e.handleFilter]}}),a("label",{attrs:{for:"ascension"}},[e._v("pieces/monus")])])]),a("div",{staticClass:"row"},[e.selectedMat?a("div",{staticClass:"col-xs-12 col--selected-mat"},[a("span",{staticClass:"span--label"},[e._v("Selected:")]),a("img",{staticClass:"image--selected-mat",attrs:{src:e.selectedMatPath,title:"Click to select another"},on:{click:e.handleToggle}}),e.isClosed?a("span",{staticClass:"icon--toggle-mat",attrs:{title:"Expand"},on:{click:e.handleToggle}},[e._v("◀")]):a("span",{staticClass:"icon--toggle-mat",attrs:{title:"Collapse"},on:{click:e.handleToggle}},[e._v("▼")])]):a("div",{staticClass:"col-xs-12 col--selected-mat"},[a("span",{staticClass:"span--label"},[e._v("Select a mat from below.")])])])]),a("div",{staticClass:"container--image",class:{closed:e.isClosed}},e._l(e.filteredMats,(function(t){return a("div",{key:t.filename,staticClass:"wrapper--image"},[a("img",{staticClass:"image--mat",class:{selected:e.isSelected==t.startRange+":"+t.endRange},attrs:{src:e.getUrl(t)},on:{click:function(a){return e.handleClick(t)}}})])})),0)])},S=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-xs-3 col--label"},[a("span",{staticClass:"wrapper--filter-label"},[e._v("Rarity")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-xs-3 col--label"},[a("span",{staticClass:"wrapper--filter-label"},[e._v("Type")])])}],P={name:"MatSelectorVisual",props:{matRanges:String,region:String,isClosed:Boolean,triggerReset:Boolean},data(){return{baseUrl:"./assets/",mats:b,filteredMats:b,isSelected:null,selectedMat:null,selectedMatPath:null,matRarityFilter:["gold","silver","bronze"],matTypeFilter:["mat","skill","ascension"]}},methods:{getUrl(e){return`https://static.atlasacademy.io/JP/Items/${e.filename}_bordered.png`},handleToggle(){this.$emit("handle-mat-toggle")},handleClick(e){e&&(this.selectedMat=e,this.selectedMatPath=this.getUrl(e),this.handleToggle(),this.isSelected=e.startRange+":"+e.endRange,this.$emit("handle-mat-select",`${e.startRange}:${e.endRange}`))},handleFilter(){let e=[],a=[],t=[];if(""===this.region||"JP"===this.region)e=b;else{let a=b.filter((e=>e.availability===this.region));e=[...e,...a]}for(let[,i]of Object.entries(this.matRarityFilter)){let t=e.filter((e=>e.rarity===i));a=[...a,...t]}for(let[,i]of Object.entries(this.matTypeFilter)){let e=a.filter((e=>e.type===i));t=[...t,...e]}this.filteredMats=t,this.filteredMats.filter((e=>`${e.startRange}:${e.endRange}`===this.isSelected)).length<=0&&(this.isSelected="",this.$emit("handle-mat-select",""))}},watch:{matRanges:{immediate:!1,handler(){""!==this.matRanges?(this.isSelected=this.matRanges,this.selectedMat=this.filteredMats.filter((e=>`${e.startRange}:${e.endRange}`===this.isSelected)),this.selectedMatPath=this.getUrl(this.selectedMat[0])):(this.selectedMat=null,this.selectedMatPath=null,this.isSelected=null)}},region:{immediate:!1,handler(){this.handleFilter()}},triggerReset:{immediate:!1,handler(){this.selectedMat=null,this.selectedMatPath=null,this.isSelected=null,this.matRarityFilter=["gold","silver","bronze"],this.matTypeFilter=["mat","skill","ascension"],this.handleFilter(),this.$emit("handle-trigger-reset")}}},created:function(){this.handleFilter()}},w=P,M=(0,c.Z)(w,F,S,!1,null,"16925c6d",null),x=M.exports,N=function(){var e=this,a=e._self._c;return a("div",{staticClass:"container--results"},[e.results?0===e.results.length?a("div",{staticClass:"grid grid--no-result"},[a("span",{staticClass:"notification--no-result"},[e._v("No results found.")])]):e.results.length>0?a("div",{staticClass:"grid"},[e._m(0),e._l(e.results,(function(t){return a("div",{key:t[0],staticClass:"row grid--row"},[a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[a("span",{staticClass:"responsive--header"},[e._v("Area")]),e._v(" "+e._s(t.values[2].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-3"},[a("span",{staticClass:"responsive--header"},[e._v("Quest")]),a("div",{staticClass:"responsive--link"},[t.values[3].hyperlink?a("a",{staticClass:"link--wiki",attrs:{href:t.values[3].hyperlink,target:"_blank"}},[e._v(e._s(t.values[3].formattedValue))]):a("span",[e._v(e._s(t.values[3].formattedValue))])])]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("AP")]),e._v(" "+e._s(t.values[4].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("BP/AP")]),e._v(" "+e._s(t.values[5].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("APD")]),e._v(" "+e._s(t.values[6].formattedValue)+" ")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[t.values[8].formattedValue?a("span",{staticClass:"responsive--header"},[e._v("%")]):e._e(),e._v(" "+e._s(t.values[8].formattedValue)+" "),t.values[8].formattedValue?a("span",[e._v("%")]):e._e()]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[a("span",{staticClass:"responsive--header"},[e._v("Runs")]),e._v(" "+e._s(t.values[10].formattedValue)+" ")])])}))],2):e._e():a("div",{staticClass:"grid--first-load"})])},I=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"row grid--row grid--header"},[a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[e._v("Area")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-3"},[e._v("Quest")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("AP")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("BP/AP")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("AP/Drop")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-2"},[e._v("Drop Chance")]),a("div",{staticClass:"grid--cell col-xs-12 col-sm-1"},[e._v("Runs")])])}],U={name:"Results",props:{results:{type:Array}},methods:{}},B=U,$=(0,c.Z)(B,N,I,!1,null,"59cafbd2",null),z=$.exports,G=function(){var e=this,a=e._self._c;return e.searchLink?a("div",{staticClass:"container--searchlink"},[a("input",{staticClass:"input--search-link",attrs:{readonly:"",type:"text"},domProps:{value:e.searchLink},on:{focus:function(e){return e.target.select()}}})]):e._e()},J=[],O={name:"SearchLink",props:{searchLink:String},methods:{}},V=O,Z=(0,c.Z)(V,G,J,!1,null,"d136cffc",null),E=Z.exports,j=function(){var e=this,a=e._self._c;return e.errorMsg?a("div",{staticClass:"container--errorMsg"},[a("span",{staticClass:"span--errorMsg"},[e._v(e._s(e.errorMsg))])]):e._e()},H=[],q={name:"ErrorMsg",props:{errorMsg:String},methods:{}},W=q,Q=(0,c.Z)(W,j,H,!1,null,"428b9b19",null),Y=Q.exports,K={name:"Lookup",components:{SheetSelector:T,MatSelectorVisual:x,Results:z,SearchLink:E,ErrorMsg:Y},data(){return{sheetIds:L,mats:b,sheetUrl:"",sheetObj:{},sheetId:"",matRanges:"",isClosed:!0,triggerReset:!1,results:null,region:"",isLoading:!1,searchLink:null,errorMsg:null}},methods:{handleSheetSelect(e){e&&""!==e.key?(this.sheetId=e.key,this.sheetUrl=e.value,window.localStorage.setItem("sheetUrl",e.value),e.value.indexOf("JP")>-1?this.region="JP":this.region="ALL"):(this.sheetId="",this.sheetUrl="",window.localStorage.removeItem("sheetUrl")),""!==this.sheetUrl&&""!==this.matRanges&&this.handleSubmit()},handleMatSelect(e){""!==e?(this.matRanges=e,window.localStorage.setItem("matRanges",e)):(this.matRanges="",window.localStorage.removeItem("matRanges"),this.isClosed=!1,this.results=null),""!==this.sheetUrl&&""!==this.matRanges&&this.handleSubmit()},handleMatToggle(){this.isClosed=!this.isClosed},handleTriggerReset(){this.triggerReset=!1},handleSubmit(){if(this.errorMsg=null,this.results=null,this.sheetUrl)if(this.matRanges.length<5)this.errorMsg="Please select a mat.";else{this.isLoading=!0,this.isClosed=!0;const e=`${f}${p}?ranges=${this.sheetUrl}!${this.matRanges}&fields=sheets&key=${R}`;u().get(e).then((e=>{this.isLoading=!1;const{rowData:a}=e.data.sheets[0].data[0];a&&(a[0].values[2].formattedValue?this.results=a:this.results=[])})).catch((e=>{this.isLoading=!1,this.errorMsg="Error loading data.",console.log(e)}))}else this.errorMsg="Please select a sheet."},handleReset(){this.results=null,this.searchLink=null,this.sheetId="843570146",this.matRanges="",this.region="JP",this.errorMsg=null,this.isClosed=!1,this.triggerReset=!0,window.localStorage.setItem("sheetUrl","Best%205%20AP%2FDrop%20%28JP%29"),window.localStorage.removeItem("matRanges"),"/"!==this.$route.path&&this.$router.push("/")},handleLink(){this.errorMsg=null,""!==this.sheetId&&""!==this.matRanges?this.searchLink=`${window.location.origin}${window.location.pathname}#${this.sheetId}/${this.matRanges}`:this.errorMsg="Please select a sheet and a mat first."}},mounted:function(){if(null!==window.localStorage.getItem("sheetUrl")&&null!==window.localStorage.getItem("matRanges")?(this.sheetUrl=window.localStorage.getItem("sheetUrl"),this.matRanges=window.localStorage.getItem("matRanges"),this.sheetId=this.sheetIds.find((e=>e.sheetUrl===this.sheetUrl)).sheetId,this.sheetUrl.indexOf("JP")>-1?this.region="JP":this.region="ALL"):this.isClosed=!1,this.$route.path.length>1){const e=encodeURI(this.$route.path),a=e.substr(1).split("/");this.sheetId=a[0],this.matRanges=a[1],setTimeout((()=>{this.handleSubmit()}),100)}}},X=K,ee=(0,c.Z)(X,y,h,!1,null,"21984c9d",null),ae=ee.exports;i.ZP.use(g.Z);const te=[{path:"*",name:"Lookup",component:ae}],ie=new g.Z({routes:te,mode:"hash"});var le=ie;i.ZP.config.productionTip=!1,new i.ZP({router:le,render:e=>e(d)}).$mount("#app")}},a={};function t(i){var l=a[i];if(void 0!==l)return l.exports;var s=a[i]={exports:{}};return e[i](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,i,l,s){if(!i){var r=1/0;for(m=0;m<e.length;m++){i=e[m][0],l=e[m][1],s=e[m][2];for(var n=!0,o=0;o<i.length;o++)(!1&s||r>=s)&&Object.keys(t.O).every((function(e){return t.O[e](i[o])}))?i.splice(o--,1):(n=!1,s<r&&(r=s));if(n){e.splice(m--,1);var c=l();void 0!==c&&(a=c)}}return a}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[i,l,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var l,s,r=i[0],n=i[1],o=i[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(l in n)t.o(n,l)&&(t.m[l]=n[l]);if(o)var m=o(t)}for(a&&a(i);c<r.length;c++)s=r[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(m)},i=self["webpackChunkfgo_lookup"]=self["webpackChunkfgo_lookup"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(9219)}));i=t.O(i)})();
//# sourceMappingURL=app.8a78fc86.js.map