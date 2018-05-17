/**
 * @file app.js
 *
 * @brief
 * JSONEditor is an editor to display and edit JSON data in a treeview.
 *
 * Supported browsers: Chrome, Firefox, Safari, Opera, Internet Explorer 8+
 *
 * @license
 * This json editor is open sourced with the intention to use the editor as
 * a component in your own application. Not to just copy and monetize the editor
 * as it is.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Copyright (C) 2011-2012 Jos de Jong, http://jsoneditoronline.org
 *
 * @author  Jos de Jong, <wjosdejong@gmail.com>
 * @date    2012-11-03
 */
var editor = null;
var formatter = null;

var app = {};

/**
 * Get the JSON from the formatter and load it in the editor
 */
app.formatterToEditor = function () {
	try {
		editor.set(formatter.get());
	} catch (err) {
		app.notify.showError(err);
	}
};

/**
 * Get the JSON from the editor and load it into the formatter
 */
app.editorToFormatter = function () {
	try {
		formatter.set(editor.get());
	} catch (err) {
		app.notify.showError(err);
	}
};

/**
 * Load the interface (editor, formatter, splitter)
 */
// TODO: split the method load in multiple methods, it is too large
app.load = function () {
	try {
		// notification handler
		app.notify = new Notify();

		// default json document
		// var json={
		// 		    "vnfdata": {
		// 		        "vnfid": "006d3e00-dab3-4d42-b11f-7f1869d0c9d5w",
		// 		        "name": "witsky_vnf",
		// 		        "vdus": [
		// 		            {
		// 		                "vduid": "20b244d1-40d3-46b5-944b-93604d79225c",
		// 		                "name": "TEST",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "7ae6711b-4cb2-433f-9d7e-ce5e2e48d175",
		// 		                        "vcpu": 16,
		// 		                        "vmemory": 32768,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH3",
		// 		                                "order": 3,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "188.103.3.113",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.25",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "59575fbe-d079-49be-ac90-2c6a815ea26e",
		// 		                "name": "SAS",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "1f9d58be-aad1-4898-a8ba-caf7cde208d8",
		// 		                        "vcpu": 8,
		// 		                        "vmemory": 16384,
		// 		                        "vdisk": 300,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 300
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.13",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "188.103.3.109",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "31c21fed-108d-4178-a002-e82d16b53f8d",
		// 		                        "vcpu": 8,
		// 		                        "vmemory": 16384,
		// 		                        "vdisk": 300,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 300
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.12",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "188.103.3.108",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "a13c945c-92db-4e39-b8ce-29099d41f7cb",
		// 		                "name": "BSS",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "51711538-5478-453a-bbc1-b68319ac3850",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.110",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.10",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.212.189.114",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "8d9506cb-c329-4378-9214-be21895bbf42",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.212.189.115",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.11",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.111",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "a918c481-3131-4507-aa04-53916579e343",
		// 		                "name": "SDB",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "134f571d-7b68-4efc-8d55-6c2f38065529",
		// 		                        "vcpu": 16,
		// 		                        "vmemory": 32768,
		// 		                        "vdisk": 200,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 200
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.9",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.107",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.1.232.3",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "d91bb5b9-ae2e-4736-83b0-903ad75f0afa",
		// 		                        "vcpu": 16,
		// 		                        "vmemory": 32768,
		// 		                        "vdisk": 200,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 200
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.8",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.1.232.2",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.106",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "aa46e3e4-a9f0-4bc5-b427-b1a05714cb9f",
		// 		                "name": "ELBS",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "35ca9697-fb20-45f4-bad9-4d842e179e09",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.103",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.77.23.51",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.19",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "98fbc74c-5b35-4d0f-be99-2e228ecc8377",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.77.23.50",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.18",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.102",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "af1d4c8f-8844-4d59-b00c-46bbe9a225d5",
		// 		                "name": "EMG",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "0e079a80-b187-4fee-bcd3-d82e1476899e",
		// 		                        "vcpu": 16,
		// 		                        "vmemory": 32768,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.189.35.18",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.100",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.16",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "3cfee438-76bc-42d1-a169-d71e3744a71b",
		// 		                        "vcpu": 16,
		// 		                        "vmemory": 32768,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.17",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.189.35.19",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.101",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "fee9886d-bca6-40b6-b75d-db57507550b8",
		// 		                "name": "ESG",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "74792f45-eaed-47e7-b71b-f54d75cac804",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.14",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.77.23.58",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.98",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "955f3f96-9005-40e2-802a-8727935d6b6d",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.77.23.59",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.15",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.99",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "19aea5c9-ec20-4cd7-a54f-e73179e5d57c",
		// 		                "name": "EMS",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "6e15d528-8d49-4428-8149-41dc4b6d7513",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 1024,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.212.189.116",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.233.2",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.112",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            },
		// 		            {
		// 		                "vduid": "de2492e8-3f46-4271-84d9-197071b16181",
		// 		                "name": "ESIP",
		// 		                "vms": [
		// 		                    {
		// 		                        "vmid": "1a66f473-0e99-48a8-8c5f-883cb2cacd1e",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.21",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.105",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.189.34.107",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    },
		// 		                    {
		// 		                        "vmid": "f95a7558-5436-4ddd-863e-aba0338b086c",
		// 		                        "vcpu": 4,
		// 		                        "vmemory": 8192,
		// 		                        "vdisk": 100,
		// 		                        "volumes": [
		// 		                            {
		// 		                                "name": "",
		// 		                                "size": 100
		// 		                            }
		// 		                        ],
		// 		                        "nics": [
		// 		                            {
		// 		                                "name": "ETH5",
		// 		                                "order": 5,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "MANAGEMENT",
		// 		                                "order": 0,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH1",
		// 		                                "order": 2,
		// 		                                "ip": "10.189.34.106",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH0",
		// 		                                "order": 1,
		// 		                                "ip": "10.1.231.20",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH2",
		// 		                                "order": 3,
		// 		                                "ip": "188.103.3.104",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            },
		// 		                            {
		// 		                                "name": "ETH4",
		// 		                                "order": 4,
		// 		                                "ip": "",
		// 		                                "mac": "FF:FF:FF:FF:FF:FF",
		// 		                                "floatingip": "",
		// 		                                "type": ""
		// 		                            }
		// 		                        ]
		// 		                    }
		// 		                ]
		// 		            }
		// 		        ]
		// 		    },
		// 		    "extensibleParameter": {
		// 		        "floatip": [
		// 		            {
		// 		                "vduid": "a918c481-3131-4507-aa04-53916579e343",
		// 		                "vduname": "SDB",
		// 		                "ethx": "0",
		// 		                "ipvalue": "188.103.4.80"
		// 		            }
		// 		        ]
		// 		    }
		// 		};
		var json = {
			"name": "BeJson",
			"url": "http://www.bejson.com",
			"page": 88,
			"isNonProfit": true,
			"address": {
				"street": "西湖国际科技园",
				"city": "浙江杭州",
				"country": "中国"
			},
			"links": [{
				"name": "Google",
				"url": "http://www.google.com"
			}, {
				"name": "Baidu",
				"url": "http://www.baidu.com"
			}, {
				"name": "SoSo",
				"url": "http://www.SoSo.com"
			}]
		};

		// Store whether editor or formatter is last changed
		app.lastChanged = undefined;

		// formatter
		var container = document.getElementById("jsonformatter");
		formatter = new JSONFormatter(container, {
			change: function () {
				app.lastChanged = formatter;
			}
		});
		formatter.set(json);
		formatter.onError = function (err) {
			app.notify.showError(err);
		};

		// editor
		container = document.getElementById("jsoneditor");
		editor = new JSONEditor(container, {
			change: function () {
				app.lastChanged = editor;
			}
		});
		editor.set(json);
		// TODO: automatically synchronize data of formatter and editor? (editor should keep its state though)

		// splitter
		var domSplitter = document.getElementById('splitter');
		app.splitter = new Splitter({
			container: domSplitter,
			change: function () {
				app.resize();
			}
		});

		// button Formatter-to-Editor
		domSplitter.appendChild(document.createElement('br'));
		domSplitter.appendChild(document.createElement('br'));
		domSplitter.appendChild(document.createElement('br'));
		var toForm = document.createElement('button');
		toForm.id = 'toForm';
		toForm.title = '解析JSON';
		toForm.className = 'convert';
		toForm.innerHTML = '<div class="convert-right"></div>';
		toForm.onclick = function () {
			this.focus();
			app.formatterToEditor();
		};
		domSplitter.appendChild(toForm);

		// button Editor-to-Formatter
		domSplitter.appendChild(document.createElement('br'));
		domSplitter.appendChild(document.createElement('br'));
		var toJSON = document.createElement('button');
		toJSON.id = 'toJSON';
		toJSON.title = '保存JSON';
		toJSON.className = 'convert';
		toJSON.innerHTML = '<div class="convert-left"></div>';
		toJSON.onclick = function () {
			this.focus();
			app.editorToFormatter();
		};
		domSplitter.appendChild(toJSON);

		// web page resize handler
		JSONEditor.Events.addEventListener(window, 'resize', app.resize);

		// enforce FireFox to not do spell checking on any input field
		document.body.spellcheck = false;
	} catch (err) {
		//app.notify.showError(err);
	}
};

/**
 * Callback method called when a file or url is opened.
 * @param {Error} err
 * @param {String} data
 */
app.openCallback = function (err, data) {
	if (!err) {
		if (data != undefined) {
			formatter.setText(data);
			try {
				var json = JSONEditor.parse(data);
				editor.set(json);
			} catch (err) {
				editor.set({});
				app.notify.showError(err);
			}
		}
	} else {
		app.notify.showError(err);
	}
};



app.resize = function () {
	var domEditor = document.getElementById('jsoneditor');
	var domFormatter = document.getElementById('jsonformatter');
	var domSplitter = document.getElementById('splitter');

	var width = $("#content-wrapper").width();//window.innerWidth || document.body.offsetWidth || document.documentElement.offsetWidth;
	//alert(width);
	var height = $("#content-wrapper").height();//window.innerHeight || document.body.offsetHeight || document.documentElement.offsetHeight;
	//height = height - 88;
	var splitterWidth = domSplitter.clientWidth;

	var splitterLeft = width * app.splitter.getValue();
	//var splitterLeft = 460;
	// resize formatter
	domFormatter.style.width = '48%'//Math.round(splitterLeft) + 'px';

	// resize editor
	// the width has a -1 to prevent the width from being just half a pixel
	// wider than the window, causing the content elements to wrap...
	domEditor.style.left = Math.round(splitterLeft + splitterWidth) + 'px';
	domEditor.style.width = '48%'//Math.round(width - splitterLeft - splitterWidth - 1) + 'px';
	$("#jsonformatter").height(height);
};