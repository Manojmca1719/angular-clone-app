// export const docsMenu = [
//     {
//         leftMenu: "Introduction",
//         routerLink: "/docs",
//         subMenu: []
//     },
//     {
//         leftMenu: "Getting Started",
//         routerLink: "/docs",
//         subMenu: [
//             {
//                 subMenuTitle: "What is Angular?",
//                 rightMenu: [
//                     {
//                         rightMenuTitle: "What is Angular",
//                         goToID: "whatIsAngular"
//                     },
//                     {
//                         rightMenuTitle: "Angular applications:The essentials",
//                         goToID: "angularApplicationsTheEssentails"
//                     }
//                 ],
//                 childSubMenu: []
//             },
//             {
//                 subMenuTitle: "Try it",
//                 rightMenu: [],
//                 childSubMenu: [
//                     {
//                         childSubMenuTitle: "Getting Started",
//                         rightMenu: [
//                             {
//                                 rightMenuTitle: "Getting Started",
//                                 goToID: "gettingStarted"
//                             },
//                             {
//                                 rightMenuTitle: "Prerequesties",
//                                 goToID: "prerequesties"
//                             },
//                         ]
//                     }
//                 ]
//             },
//             {
//                 subMenuTitle: "Setup",
//                 rightMenu: [],
//                 childSubMenu: []
//             }
//         ],
//     }
// ] 

export const docsMenu = [
    //  1 - Introduction
    {
        id: "1",
        leftMenuTitle: "Introduction",
        redirectTo: "introduction",
        firstLevelSubMenu: [],
        select: false
    },
    // 2 - Getting Started
    {
        id: "2",
        leftMenuTitle: "Getting Started",
        redirectTo: "getting-started",
        firstLevelSubMenu: [
            {
                id: "2.1",
                firstLevelSubMenuTitle: "What is Angular?",
                reDirectTo: "what-is-angular",
                secondLevelSubMenu: [],
                rightMenu: [
                    {
                        id: "2.1.r1",
                        rightMenuTitle: "What is Angular?",
                        scrollToId: "what-is-angular",
                        rightMenuSub: []
                    },
                    {
                        id: "2.1.r2",
                        rightMenuTitle: "Angular applications: The Essentials",
                        scrollToId: "angular-applications-the-essentials",
                        rightMenuSub: [
                            {
                                id: "2.1.r2.1",
                                reightSubMenu: "Components",
                                scrollTo: "components"
                            },
                            {
                                id: "2.1.r2.2",
                                reightSubMenu: "Templates",
                                scrollTo: "templates"
                            },
                            {
                                id: "2.1.r2.3",
                                reightSubMenu: "Dependency Injection",
                                scrollTo: "dependency-injections"
                            }
                        ]
                    },
                    {
                        id: "2.1.r3",
                        rightMenuTitle: "Angular CLI",
                        scrollToId: "angular-cli",
                        rightMenuSub: []
                    },
                    {
                        id: "2.1.r4",
                        rightMenuTitle: "First-Party Libraries",
                        scrollToId: "first-party-libraries",
                        rightMenuSub: []
                    },
                    {
                        id: "2.1.r5",
                        rightMenuTitle: "Next Steps",
                        scrollToId: "next-steps",
                        rightMenuSub: []
                    }
                ],
                select: false
            },
            {
                id: "2.2",
                firstLevelSubMenuTitle: "Try It",
                reDirectTo: "try-it",
                secondLevelSubMenu: [
                    {
                        id: "2.2.l1",
                        secondLevelSubMenuTitle: "Getting started",
                        redirectTo: "try-it-getting-started",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "2.2.l1.r1",
                                rightMenuTitle: "Getting startd with Angular",
                                scrollToId: "getting-started-with-angular",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r3",
                                rightMenuTitle: "Take a tour of the example application",
                                scrollToId: "take-a-tour-of-the-example-application",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r4",
                                rightMenuTitle: "Create a sample project",
                                scrollToId: "create-a-sample-project",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r5",
                                rightMenuTitle: "Create a product list",
                                scrollToId: "create-a-prduct-list",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r6",
                                rightMenuTitle: "Pass data to a child component",
                                scrollToId: "pass-data-to-a-child-component",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r7",
                                rightMenuTitle: "Pass data to a parent component",
                                scrollToId: "pass-data-to-a-parent-component",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l1.r8",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "2.2.l2",
                        secondLevelSubMenuTitle: "Adding navigation",
                        redirectTo: "adding-navigation",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "2.2.l2.r1",
                                rightMenuTitle: "Adding navigation",
                                scrollToId: "adding-navigation",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l2.r2",
                                rightMenuTitle: "Associate a URL path with a component",
                                scrollToId: "associate-a-url-path-with-a-component",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l2.r3",
                                rightMenuTitle: "View product details",
                                scrollToId: "view-product-details",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l2.r4",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "2.2.l3",
                        secondLevelSubMenuTitle: "Managing data",
                        redirectTo: "managing-data",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "2.2.l3.r1",
                                rightMenuTitle: "Managing data",
                                scrollToId: "managing-data",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l3.r2",
                                rightMenuTitle: "Creating the shopping cart service",
                                scrollToId: "creating-the-shopping-cart-service",
                                rightMenuSub: [
                                    {
                                        id: "2.2.l3.r2.1",
                                        reightSubMenu: "Define a cart service",
                                        scrollTo: "define-a-cart-service"
                                    },
                                    {
                                        id: "2.2.l3.r2.2",
                                        reightSubMenu: "Use the cart service",
                                        scrollTo: "use-the-cart-service"
                                    }
                                ]
                            },
                            {
                                id: "2.2.l3.r3",
                                rightMenuTitle: "Create the cart view",
                                scrollToId: "create-the-cart-view",
                                rightMenuSub: [
                                    {
                                        id: "2.2.l3.r3.1",
                                        reightSubMenu: "Set up the cart component",
                                        scrollTo: "set-up-the-cart-component"
                                    },
                                    {
                                        id: "2.2.l3.r3.2",
                                        reightSubMenu: "Display the cart items",
                                        scrollTo: "display-the-cart-items"
                                    }
                                ]
                            },
                            {
                                id: "2.2.l3.r4",
                                rightMenuTitle: "Retrieve shipping prices",
                                scrollToId: "retrieve-shipping-prices",
                                rightMenuSub: [
                                    {
                                        id: "2.2.l3.r4.1",
                                        reightSubMenu: "Configure AppModule to use HttpClient",
                                        scrollTo: "configure-appmodule-to-use-httpclient"
                                    },
                                    {
                                        id: "2.2.l3.r4.2",
                                        reightSubMenu: "Configure CartService to use HttpClient",
                                        scrollTo: "configure-cartservice-to-use-httpclient"
                                    },
                                    {
                                        id: "2.2.l3.r4.3",
                                        reightSubMenu:
                                            "Configure CartService to get shipping prices",
                                        scrollTo: "cofigure-cartservice-to-get-shipping-prices"
                                    }
                                ]
                            },
                            {
                                id: "2.2.l3.r5",
                                rightMenuTitle: "Create shipping component",
                                scrollToId: "view-product-details",
                                rightMenuSub: [
                                    {
                                        id: "2.2.l3.r5.1",
                                        reightSubMenu:
                                            "Configuring the ShippingComponent to use CartService",
                                        scrollTo:
                                            "configuring-the-shippingcomponent-to-use-cartservice"
                                    }
                                ]
                            },
                            {
                                id: "2.2.l3.r6",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "2.2.l4",
                        secondLevelSubMenuTitle: "Using forms for user input",
                        redirectTo: "using-forms-for-user-input",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "2.2.l4.r1",
                                rightMenuTitle: "Using forms for user input",
                                scrollToId: "using-forms-for-user-input",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l4.r2",
                                rightMenuTitle: "Define the checkout form model",
                                scrollToId: "define-the-checkout-form-model",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l4.r3",
                                rightMenuTitle: "Create the checkout form",
                                scrollToId: "create-the-checkout-form",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l4.r4",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "2.2.l5",
                        secondLevelSubMenuTitle: "Deploying an application",
                        redirectTo: "deployig-an-application",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "2.2.l5.r1",
                                rightMenuTitle: "Deploying an application",
                                scrollToId: "deployig-an-application",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l5.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l5.r3",
                                rightMenuTitle: "Running your application locally",
                                scrollToId: "running-your-application-locally",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l5.r4",
                                rightMenuTitle: "Building and hositing your application",
                                scrollToId: "building-and-hositing-your-application",
                                rightMenuSub: []
                            },
                            {
                                id: "2.2.l5.r5",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: [
                                    {
                                        id: "2.2.l5.r5.1",
                                        reightSubMenu: "Learning more Angular",
                                        scrollTo: "learning-more-angular"
                                    },
                                    {
                                        id: "2.2.l5.r5.2",
                                        reightSubMenu: "Joining the community",
                                        scrollTo: "joining-the-community"
                                    },
                                    {
                                        id: "2.2.l5.r5.3",
                                        reightSubMenu: "Exploring the Angular ecosystem",
                                        scrollTo: "exploring-the-angular-ecosystem"
                                    }
                                ]
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "2.3",
                firstLevelSubMenuTitle: "Setup",
                reDirectTo: "setup",
                secondLevelSubMenu: [],
                rightMenu: [
                    {
                        id: "2.3.r1",
                        rightMenuTitle: "Setting up the local environment and workspace",
                        scrollToId: "setting-up-the-local-envireonment-and-workspace",
                        rightMenuSub: []
                    },
                    {
                        id: "2.3.r2",
                        rightMenuTitle: "Prerequisites",
                        scrollToId: "prerequisites",
                        rightMenuSub: []
                    },
                    {
                        id: "2.3.r3",
                        rightMenuTitle: "Install the Angular CLI",
                        scrollToId: "install-the-angular-cli",
                        rightMenuSub: []
                    },
                    {
                        id: "2.3.r4",
                        rightMenuTitle: "Create a workspace and initial application",
                        scrollToId: "create-a-workspace-and-initial-application",
                        rightMenuSub: []
                    },
                    {
                        id: "2.3.r5",
                        rightMenuTitle: "Run the application",
                        scrollToId: "run-the-application",
                        rightMenuSub: []
                    },
                    {
                        id: "2.3.r6",
                        rightMenuTitle: "Next steps",
                        scrollToId: "next-steps",
                        rightMenuSub: []
                    }
                ],
                select: false
            }
        ],
        select: false
    },
    // 3 - Understanding Angular
    {
        id: "3",
        leftMenuTitle: "Understanding Angular",
        redirectTo: "understanding-angular",
        firstLevelSubMenu: [
            {
                id: "3.1",
                firstLevelSubMenuTitle: "Overview",
                reDirectTo: "overview",
                secondLevelSubMenu: [],
                rightMenu: [
                    {
                        id: "3.1.r1",
                        secondLevelSubMenuTitle: "Understanding Angular",
                        redirectTo: "understanding-angular"
                    },
                    {
                        id: "3.1.r2",
                        secondLevelSubMenuTitle: "Prerequisites",
                        redirectTo: "prerequisites"
                    },
                    {
                        id: "3.1.r3",
                        secondLevelSubMenuTitle: "Learn about Angular basics",
                        redirectTo: "learn-about-angular-basics"
                    }
                ],
                select: false
            },
            {
                id: "3.2",
                firstLevelSubMenuTitle: "Components",
                reDirectTo: "components",
                secondLevelSubMenu: [
                    {
                        id: "3.2.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l1.r1",
                                rightMenuTitle: "Angular components overview",
                                scrollToId: "angular-component-overview",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l1.r3",
                                rightMenuTitle: "Creating component",
                                scrollToId: "creating-component",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l1.r3.1",
                                        reightSubMenu: "Creating a component using the Angular CLI",
                                        scrollTo: "creating-a-component-using-the-angular-cli"
                                    },
                                    {
                                        id: "3.2.l1.r3.2",
                                        reightSubMenu: "Creating a component manually",
                                        scrollTo: "creating-a-component-manually"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l1.r4",
                                rightMenuTitle: "Specifying a component's CSS selector",
                                scrollToId: "specifying-a-components-css-selector",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l1.r5",
                                rightMenuTitle: "Defining a component's template",
                                scrollToId: "defining-a-components-template",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l1.r6",
                                rightMenuTitle: "Defining a component's style",
                                scrollToId: "defining-a-components-style",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l1.r7",
                                rightMenuTitle: "Next Steps",
                                scrollToId: "next-steps",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l2",
                        secondLevelSubMenuTitle: "Component lifecycle",
                        redirectTo: "component-lifecycle",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l2.r1",
                                rightMenuTitle: "Lifecycle hooks",
                                scrollToId: "lifecycle-hooks",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l2.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l2.r3",
                                rightMenuTitle: "Responding to lifecycle events",
                                scrollToId: "responding-to-lifecycle-events",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l2.r3.1",
                                        reightSubMenu: "Lifecycle event sequence",
                                        scrollTo: "lifecycle-event-sequence"
                                    },
                                    {
                                        id: "3.2.l2.r3.2",
                                        reightSubMenu: "Lifecycle example set",
                                        scrollTo: "lifecycle-example-set"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l2.r4",
                                rightMenuTitle: "Initializing a component or directive",
                                scrollToId: "initializing-a-component-or-directive",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l2.r5",
                                rightMenuTitle: "Cleaning up on instance destruction",
                                scrollToId: "cleaning-up-on-instance-destruction",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l2.r6",
                                rightMenuTitle: "General examples",
                                scrollToId: "general-examples",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l2.r6.1",
                                        reightSubMenu:
                                            "Sequence and frequency of all lifecycle events",
                                        scrollTo: "sequence-and-frequency-of-all-lifecycle-events"
                                    },
                                    {
                                        id: "3.2.l2.r6.2",
                                        reightSubMenu: "Use directives to watch the DOM",
                                        scrollTo: "use-directives-to-watch-the-dom"
                                    },
                                    {
                                        id: "3.2.l2.r6.3",
                                        reightSubMenu: "Use component and directive hooks together",
                                        scrollTo: "lifecycle-example-set"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l2.r7",
                                rightMenuTitle: "Using change detection hooks",
                                scrollToId: "using-change-detection-hooks",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l2.r7.1",
                                        reightSubMenu: "Responding to view changes",
                                        scrollTo: "responding-to-view-changes"
                                    },
                                    {
                                        id: "3.2.l2.r7.2",
                                        reightSubMenu: "Responding to projected content changes",
                                        scrollTo: "responding-to-projected-content-changes"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l2.r8",
                                rightMenuTitle: "Defining custom change detection",
                                scrollToId: "defining-custom-change-detection",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l3",
                        secondLevelSubMenuTitle: "View encapsulation",
                        redirectTo: "view-encapsulation",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l3.r1",
                                rightMenuTitle: "View encapsulation",
                                scrollToId: "view-encapsulation",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l3.r2",
                                rightMenuTitle: "Inspecting generated CSS",
                                scrollToId: "inspecting-generated-css",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l3.r3",
                                rightMenuTitle: "Mixing encapsulation modes",
                                scrollToId: "mixing-encapsulation-mode",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l3.r3.1",
                                        reightSubMenu: "Examples",
                                        scrollTo: "examples"
                                    }
                                ]
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l4",
                        secondLevelSubMenuTitle: "Component interaction",
                        redirectTo: "component-interaction",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l4.r1",
                                rightMenuTitle: "Component interaction",
                                scrollToId: "component-interaction",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l4.r2",
                                rightMenuTitle:
                                    "Pass data from parent to child with input binding",
                                scrollToId: "pass-data-from-parent-to-child-with-input-binding",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r2.1",
                                        reightSubMenu:
                                            "Test it for pass data from parent to child with input binding",
                                        scrollTo:
                                            "test-it-for-pass-data-from-parent-to-child-with-input-binding"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l4.r3",
                                rightMenuTitle:
                                    "Intercept input property changes with a setter",
                                scrollToId: "intercept-input-property-changes-with-a-setter",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r3.1",
                                        reightSubMenu:
                                            "Test it for intercept input property changes with a setter",
                                        scrollTo:
                                            "test-it-for-intercept-input-property-changes-with-a-setter"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l4.r4",
                                rightMenuTitle:
                                    "Intercept input property changes with ngOnChanges()",
                                scrollToId:
                                    "intercept-input-property-changes-with-ngOnChanges()",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r4.1",
                                        reightSubMenu:
                                            "Test it for intercept input property changes with ngOnChanges()",
                                        scrollTo:
                                            "test-it-for-intercept-input-property-changes-with-ngOnChanges()"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l4.r5",
                                rightMenuTitle: "Parent listens for child event",
                                scrollToId: "parent-listens-for-child-event",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r5.1",
                                        reightSubMenu: "Test it for parent listens for child event",
                                        scrollTo: "test-it-for-parent-listens-for-child-event"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l4.r6",
                                rightMenuTitle:
                                    "Parent interacts with child using local variable",
                                scrollToId: "parent-interacts-with-child-using-local-variable",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r6.1",
                                        reightSubMenu:
                                            "Test it for parent interacts with child using local variable",
                                        scrollTo:
                                            "test-it-for-parent-interacts-with-child-using-local-variable"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l4.r7",
                                rightMenuTitle: "Parents calls an @viewChild()",
                                scrollToId: "parents-calls-an-@viewChild()",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r7.1",
                                        reightSubMenu: "Test it for parents calls an @viewChild()",
                                        scrollTo: "test-it-for-parents-calls-an-@viewChild()"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l4.r8",
                                rightMenuTitle: "Parent and children communicate using service",
                                scrollToId: "parent-and-children-communicate-using-service",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l4.r8.1",
                                        reightSubMenu:
                                            "Test it for parent and children communicate using service",
                                        scrollTo:
                                            "test-it-for-parent-and-children-communicate-using-service"
                                    }
                                ]
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l5",
                        secondLevelSubMenuTitle: "Component styles",
                        redirectTo: "component-styles",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l5.r1",
                                rightMenuTitle: "Component styles",
                                scrollToId: "component-styles",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l5.r2",
                                rightMenuTitle: "Using component styles",
                                scrollToId: "using-component-styles",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l5.r3",
                                rightMenuTitle: "Component styling best practices",
                                scrollToId: "inspecting-generated-css",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l5.r3.1",
                                        reightSubMenu:
                                            "Authoring a component to support customization",
                                        scrollTo: "authoring-a-component-to-support-customization"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l5.r4",
                                rightMenuTitle: "Special selectors",
                                scrollToId: "special-selectors",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l5.r4.1",
                                        reightSubMenu: ":host",
                                        scrollTo: "host"
                                    },
                                    {
                                        id: "3.2.l5.r4.1",
                                        reightSubMenu: ":host-context",
                                        scrollTo: "host-context"
                                    },
                                    {
                                        id: "3.2.l5.r4.1",
                                        reightSubMenu: "(deprecated)/ deep/, >>>, and :: ng-deep",
                                        scrollTo: "deprecated-deep-ng-deep"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l5.r5",
                                rightMenuTitle: "Loading component styles",
                                scrollToId: "loading-component-styles",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l5.r5.1",
                                        reightSubMenu: "Styles in component metadata",
                                        scrollTo: "styles-in-component-metadata"
                                    },
                                    {
                                        id: "3.2.l5.r5.2",
                                        reightSubMenu: "Style files component metadata",
                                        scrollTo: "style-files-component-metadata"
                                    },
                                    {
                                        id: "3.2.l5.r5.3",
                                        reightSubMenu: "Template inline styles",
                                        scrollTo: "template-inline-styles"
                                    },
                                    {
                                        id: "3.2.l5.r5.4",
                                        reightSubMenu: "Template link tags",
                                        scrollTo: "template-link-tags"
                                    },
                                    {
                                        id: "3.2.l5.r5.5",
                                        reightSubMenu: "CSS @imports ",
                                        scrollTo: "css-imports"
                                    },
                                    {
                                        id: "3.2.l5.r5.6",
                                        reightSubMenu: "External and global style files",
                                        scrollTo: "external-and-global-style-files"
                                    },
                                    {
                                        id: "3.2.l5.r5.7",
                                        reightSubMenu: "Non-CSS style files",
                                        scrollTo: "non-css-style-files"
                                    }
                                ]
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l6",
                        secondLevelSubMenuTitle:
                            "Sharing data between child and parent directives and components",
                        redirectTo:
                            "sharing-data-between-child-and-parent-directives-and-components",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l6.r1",
                                rightMenuTitle:
                                    "Sharing data between child and parent directives and components",
                                scrollToId:
                                    "sharing-data-between-child-and-parent-directives-and-components",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l6.r2",
                                rightMenuTitle: "Sending data to a child component",
                                scrollToId: "sending-data-to-a-child-component",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l6.r2.1",
                                        reightSubMenu: "Configuring the child component",
                                        scrollTo: "configuring-the-child-component"
                                    },
                                    {
                                        id: "3.2.l6.r2.2",
                                        reightSubMenu: "Configuring the parent component",
                                        scrollTo: "configuring-the-parent-component"
                                    },
                                    {
                                        id: "3.2.l6.r2.3",
                                        reightSubMenu: "Watching for @Input() changes",
                                        scrollTo: "watching-for-Input-changes"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l6.r3",
                                rightMenuTitle: "Sending data to a parent component",
                                scrollToId: "sending-data-to-a-parent-component",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l6.r3.1",
                                        reightSubMenu: "Configuring the child component",
                                        scrollTo: "configuring-the-child-component"
                                    },
                                    {
                                        id: "3.2.l6.r3.2",
                                        reightSubMenu: "Configuring the child's template",
                                        scrollTo: "configuring-the-childs-template"
                                    },
                                    {
                                        id: "3.2.l6.r3.3",
                                        reightSubMenu: "Configuring the parent component",
                                        scrollTo: "configuring-the-parent-component"
                                    },
                                    {
                                        id: "3.2.l6.r3.4",
                                        reightSubMenu: "Configuring the parent's template",
                                        scrollTo: "configuring-the-parents-template"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l6.r4",
                                rightMenuTitle: "Using @Input() and @Output() together",
                                scrollToId: "using-input-and-output-together",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l7",
                        secondLevelSubMenuTitle: "Content projection",
                        redirectTo: "content-projection",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l7.r1",
                                rightMenuTitle: "Content projection",
                                scrollToId: "content-projection",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l7.r2",
                                rightMenuTitle: "Single-slot content projection",
                                scrollToId: "single-slot-content-projection",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l7.r3",
                                rightMenuTitle: "Multi-slot content projection",
                                scrollToId: "multi-slot-content-projection",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l7.r4",
                                rightMenuTitle: "Conditional content projection",
                                scrollToId: "conditional-content-projection",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l7.r5",
                                rightMenuTitle:
                                    "Projecting content in more complex environments",
                                scrollToId: "projecting-content-in more-complex-environments",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l8",
                        secondLevelSubMenuTitle: "Dynamic components",
                        redirectTo: "dynamic-components",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l8.r1",
                                rightMenuTitle: "Dynamic components",
                                scrollToId: "dynamic-components",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l8.r2",
                                rightMenuTitle: "Dynamic component loading",
                                scrollToId: "dynamic-component-loading",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l8.r3",
                                rightMenuTitle: "The anchor directive",
                                scrollToId: "the-anchor-directive",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l8.r4",
                                rightMenuTitle: "Loading components",
                                scrollToId: "loading-components",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l8.r5",
                                rightMenuTitle: "Resolving components",
                                scrollToId: "resolving-components",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l8.r6",
                                rightMenuTitle: "The AdComponent interface",
                                scrollToId: "the-adcomponent-interaface",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l8.r7",
                                rightMenuTitle: "Final ad banner",
                                scrollToId: "final-ad-banner",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.2.l9",
                        secondLevelSubMenuTitle: "Angular elements",
                        redirectTo: "angular-elements",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.2.l9.r1",
                                rightMenuTitle: "Angular elements overview",
                                scrollToId: "angular-elements-overview",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l9.r2",
                                rightMenuTitle: "Using custom elements",
                                scrollToId: "using-custom-elements",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l9.r2.1",
                                        reightSubMenu: "How it works",
                                        scrollTo: "how-it-works"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l9.r3",
                                rightMenuTitle: "Transforming component to custom elements",
                                scrollToId: "transforming-components-to-custom-elements",
                                rightMenuSub: [
                                    {
                                        id: "3.2.l9.r3.1",
                                        reightSubMenu: "Mapping",
                                        scrollTo: "mapping"
                                    }
                                ]
                            },
                            {
                                id: "3.2.l9.r4",
                                rightMenuTitle: "Browser support for custom elements",
                                scrollToId: "browser-support-for-custom-elements",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l9.r5",
                                rightMenuTitle: "Example: A Popup service",
                                scrollToId: "example-a-popup-service",
                                rightMenuSub: []
                            },
                            {
                                id: "3.2.l9.r6",
                                rightMenuTitle: "Typings for custom elements",
                                scrollToId: "typing-for-custom-elements",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "3.3",
                firstLevelSubMenuTitle: "Templates",
                reDirectTo: "templates",
                secondLevelSubMenu: [
                    {
                        id: "3.3.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.3.l1.r1",
                                rightMenuTitle: "Understanding templates",
                                scrollToId: "understanding-templates",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l1.r3",
                                rightMenuTitle: "Enhancing HTML",
                                scrollToId: "enhancing-html",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l1.r4",
                                rightMenuTitle: "More on template syntax",
                                scrollToId: "more-on-template-syntax",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.3.l2",
                        secondLevelSubMenuTitle: "Introduction",
                        redirectTo: "introduction",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.3.l2.r1",
                                rightMenuTitle: "Template syntax",
                                scrollToId: "template-syntax",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l2.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l2.r3",
                                rightMenuTitle: "Empower HTML",
                                scrollToId: "empower-html",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l3.r4",
                                rightMenuTitle: "More on template syntax",
                                scrollToId: "more-on-template-syntax",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.3.l3",
                        secondLevelSubMenuTitle: "Text interpolation",
                        redirectTo: "text-interpolation",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.3.l3.r1",
                                rightMenuTitle: "Displaying values with interpolation",
                                scrollToId: "understanding-templates",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l3.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l3.r3",
                                rightMenuTitle: "What's Next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.3.l4",
                        secondLevelSubMenuTitle: "Template Statements",
                        redirectTo: "template-statements",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.3.l4.r1",
                                rightMenuTitle: "Template Statements",
                                scrollToId: "template-statements",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l4.r2",
                                rightMenuTitle: "Syntax",
                                scrollToId: "syntax",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l4.r3",
                                rightMenuTitle: "Statement context",
                                scrollToId: "staement-context",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l4.r4",
                                rightMenuTitle: "Statement best practices",
                                scrollToId: "staement-best-practices",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.3.l5",
                        secondLevelSubMenuTitle: "Binding",
                        redirectTo: "binding",
                        thirdLevelSubMenu: [
                            {
                                id: "3.3.l5.1",
                                thirdLevelSubMenuTitle: "Understanding binding",
                                redirectTo: "understanding-binding",
                                rightMenu: [
                                    {
                                        id: "3.3.l5.1.r1",
                                        rightMenuTitle: "Understanding binding",
                                        scrollToId: "understanding-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.1.r2",
                                        rightMenuTitle: "Syntax",
                                        scrollToId: "syntax",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.1.r3",
                                        rightMenuTitle: "Expression context",
                                        scrollToId: "expression-context",
                                        rightMenuSub: [
                                            {
                                                id: "3.3.l5.1.r3.1",
                                                reightSubMenu: "Preventing name collisions",
                                                scrollTo: "preventing-name-collisions"
                                            }
                                        ]
                                    },
                                    {
                                        id: "3.3.l5.1.r4",
                                        rightMenuTitle: "Expression best practices",
                                        scrollToId: "expression-best-practices",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.1.r5",
                                        rightMenuTitle: "No visible side effects",
                                        scrollToId: "no-visible-side-effects",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.1.r6",
                                        rightMenuTitle: "What's next",
                                        scrollToId: "what-is-next",
                                        rightMenuSub: []
                                    }
                                ]
                            },
                            {
                                id: "3.3.l5.2",
                                thirdLevelSubMenuTitle: "Property binding",
                                redirectTo: "property-binding",
                                rightMenu: [
                                    {
                                        id: "3.3.l5.2.r1",
                                        rightMenuTitle: "Property binding",
                                        scrollToId: "property-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.2.r2",
                                        rightMenuTitle: "Prerequisites",
                                        scrollToId: "prerequisites",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.2.r3",
                                        rightMenuTitle: "Understanding the flow of data",
                                        scrollToId: "understanding-the-flow-of-data",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.2.r4",
                                        rightMenuTitle: "Binding to a property",
                                        scrollToId: "binding-to-a-property",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.2.r5",
                                        rightMenuTitle:
                                            "Setting an element property to a component property value",
                                        scrollToId:
                                            "setting-an-element-property-to-a-component-property-value",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.2.r6",
                                        rightMenuTitle: "Toggling button features",
                                        scrollToId: "toggling-button-features",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.2.r7",
                                        rightMenuTitle: "What's next",
                                        scrollToId: "what-is-next",
                                        rightMenuSub: []
                                    }
                                ]
                            },
                            {
                                id: "3.3.l5.3",
                                thirdLevelSubMenuTitle: "Attribute binding",
                                redirectTo: "attribute-binding",
                                rightMenu: [
                                    {
                                        id: "3.3.l5.3.r1",
                                        rightMenuTitle: "Attribute binding",
                                        scrollToId: "attribute-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.3.r2",
                                        rightMenuTitle: "Prerequisites",
                                        scrollToId: "prerequisites",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.3.r3",
                                        rightMenuTitle: "Syntax",
                                        scrollToId: "syntax",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.3.r4",
                                        rightMenuTitle: "Binding ARIA attributes",
                                        scrollToId: "binding-aria-attributes",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.3.r5",
                                        rightMenuTitle: "Binding to colspan",
                                        scrollToId: "binding-to-colspan",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.3.r6",
                                        rightMenuTitle: "What's next",
                                        scrollToId: "what-is-next",
                                        rightMenuSub: []
                                    }
                                ]
                            },
                            {
                                id: "3.3.l5.4",
                                thirdLevelSubMenuTitle: "Class and style binding",
                                redirectTo: "class-and-style-binding",
                                rightMenu: [
                                    {
                                        id: "3.3.l5.4.r1",
                                        rightMenuTitle: "Class and style binding",
                                        scrollToId: "class-and-style-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.4.r2",
                                        rightMenuTitle: "Prerequisites",
                                        scrollToId: "prerequisites",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.4.r3",
                                        rightMenuTitle: "Binding a single CSS class",
                                        scrollToId: "binding-a-single-css-class",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.4.r4",
                                        rightMenuTitle: "Binding to multiple CSS classes",
                                        scrollToId: "Binding-to-multiple-CSS-classes",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.4.r5",
                                        rightMenuTitle: "Binding a single CSS style",
                                        scrollToId: "binding-a-single-css-style",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.4.r6",
                                        rightMenuTitle: "Binding to multiple CSS styles",
                                        scrollToId: "Binding-to-multiple-CSS-styles",
                                        rightMenuSub: [
                                            {
                                                id: "3.3.l5.4.r6.1",
                                                rightMenuTitle:
                                                    "Single and multiple-style binding example",
                                                scrollToId: "single-and-multiple-style-binding-example"
                                            }
                                        ]
                                    },
                                    {
                                        id: "3.3.l5.4.r7",
                                        rightMenuTitle: "Styling precedence",
                                        scrollToId: "styling-precedence",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.4.r8",
                                        rightMenuTitle: "What's next",
                                        scrollToId: "what-is-next",
                                        rightMenuSub: []
                                    }
                                ]
                            },
                            {
                                id: "3.3.l5.5",
                                thirdLevelSubMenuTitle: "Event binding",
                                redirectTo: "event-binding",
                                rightMenu: [
                                    {
                                        id: "3.3.l5.5.r1",
                                        rightMenuTitle: "Event binding",
                                        scrollToId: "event-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.5.r2",
                                        rightMenuTitle: "Prerequisites",
                                        scrollToId: "prerequisites",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.5.r3",
                                        rightMenuTitle: "Binding to events",
                                        scrollToId: "Binding-to-events",
                                        rightMenuSub: [
                                            {
                                                id: "3.3.l5.5.r3.1",
                                                rightMenuTitle: "Determining an event target",
                                                scrollToId: "determining-an-event-target"
                                            }
                                        ]
                                    },
                                    {
                                        id: "3.3.l5.5.r4",
                                        rightMenuTitle: "Binding to a passive events",
                                        scrollToId: "binding-to-a-passive-events",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.5.r5",
                                        rightMenuTitle: "Binding to a keyboard events",
                                        scrollToId: "Binding-to-a-keyboard-events",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.5.r6",
                                        rightMenuTitle: "What's next",
                                        scrollToId: "what-is-next",
                                        rightMenuSub: []
                                    }
                                ]
                            },
                            {
                                id: "3.3.l5.6",
                                thirdLevelSubMenuTitle: "Two-way binding",
                                redirectTo: "two-way-binding",
                                rightMenu: [
                                    {
                                        id: "3.3.l5.6.r1",
                                        rightMenuTitle: "Two-way binding",
                                        scrollToId: "two-way-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.6.r2",
                                        rightMenuTitle: "Prerequisites",
                                        scrollToId: "prerequisites",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.6.r3",
                                        rightMenuTitle: "Adding two-way data binding",
                                        scrollToId: "adding-two-way-data-binding",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l5.6.r4",
                                        rightMenuTitle: "How two-way data binding works",
                                        scrollToId: "how-two-way-data-binding-works",
                                        rightMenuSub: []
                                    }
                                ]
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "3.3.l6",
                        secondLevelSubMenuTitle: "Pipes",
                        redirectTo: "pipes",
                        thirdLevelSubMenu: [
                            {
                                id: "3.3.l6.1",
                                thirdLevelSubMenuTitle: "Understanding pipes",
                                redirectTo: "understanding-pipes",
                                rightMenu: [
                                    {
                                        id: "3.3.l6.1.r1",
                                        rightMenuTitle: "Understanding pipes",
                                        scrollToId: "understanding-pipes",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l6.1.r2",
                                        rightMenuTitle: "What is a pipe",
                                        scrollToId: "what-is-a-pipe",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l6.1.r3",
                                        rightMenuTitle: "Built-in pipes",
                                        scrollToId: "built-in-pipes",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l6.1.r4",
                                        rightMenuTitle: "Pipes and precedence",
                                        scrollToId: "pipes-and-precedence",
                                        rightMenuSub: []
                                    }
                                ]
                            },
                            {
                                id: "3.3.l6.2",
                                thirdLevelSubMenuTitle: "Using pipe in a template",
                                redirectTo: "using-pipe-in-template",
                                rightMenu: []
                            },
                            {
                                id: "3.3.l6.3",
                                thirdLevelSubMenuTitle:
                                    "Transforming data with parameters and chained pipes",
                                redirectTo:
                                    "transforming-data-with-parameters-and-chained-pipes",
                                rightMenu: [
                                    {
                                        id: "3.3.l6.3.r1",
                                        rightMenuTitle:
                                            "Transforming data with parameters and chained pipes",
                                        scrollToId:
                                            "transforming-data-with-parameters-and-chained-pipes",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l6.3.r2",
                                        rightMenuTitle: "Example: Formatting a date",
                                        scrollToId: "example-formatting-date",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "3.3.l6.3.r3",
                                        rightMenuTitle:
                                            "Example: Applying two formats by chaining pipes",
                                        scrollToId: "example-two-formats-by-chaining-pipes",
                                        rightMenuSub: []
                                    }
                                ]
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "3.3.l7",
                        secondLevelSubMenuTitle: "Template reference variables",
                        redirectTo: "template-reference-variables",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.3.l7.r1",
                                rightMenuTitle: "Understanding template variables",
                                scrollToId: "understanding-templaate-variables",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l7.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l7.r3",
                                rightMenuTitle: "Syntax",
                                scrollToId: "syntax",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l7.r4",
                                rightMenuTitle:
                                    "How Angular assigns values to template variables",
                                scrollToId: "how-angular-assigns-values-to-template-variables",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l7.r5",
                                rightMenuTitle: "Variable specifying a name",
                                scrollToId: "variable-specifying-a-name",
                                rightMenuSub: [
                                    {
                                        id: "3.3.l7.r5.1",
                                        reightSubMenu: "Using NgForm with template variables",
                                        scrollTo: "using-ngform-with-template-variables"
                                    }
                                ]
                            },
                            {
                                id: "3.3.l7.r6",
                                rightMenuTitle: "Template variable scope",
                                scrollToId: "template-variable-scope",
                                rightMenuSub: [
                                    {
                                        id: "3.3.l7.r6.1",
                                        reightSubMenu: "Accessing in a nested template",
                                        scrollTo: "accessing-in-a-nested-template"
                                    }
                                ]
                            },
                            {
                                id: "3.3.l7.r7",
                                rightMenuTitle: "Template input variable",
                                scrollToId: "template-input-variable",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l7.r8",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.3.l8",
                        secondLevelSubMenuTitle: "SVG as templates",
                        redirectTo: "svg-as-templates",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.3.l8.r1",
                                rightMenuTitle: "SVG as templates",
                                scrollToId: "svg-as-templates",
                                rightMenuSub: []
                            },
                            {
                                id: "3.3.l8.r2",
                                rightMenuTitle: "SVG syntax example",
                                scrollToId: "svg-syntax-example",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "3.4",
                firstLevelSubMenuTitle: "Directives",
                reDirectTo: "directives",
                secondLevelSubMenu: [
                    {
                        id: "3.4.l1",
                        secondLevelSubMenuTitle: "Built-in directives",
                        redirectTo: "built-in-directives",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.4.l1.r1",
                                rightMenuTitle: "Built-in directives",
                                scrollToId: "built-in-directives",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l1.r2",
                                rightMenuTitle: "Built-in attributes directives",
                                scrollToId: "built-in-attributes-directives",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l1.r3",
                                rightMenuTitle: "Adding and removing classes with NgClass",
                                scrollToId: "adding-and-removing-classes-with-ngclass",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l1.r3.1",
                                        reightSubMenu: "Using NgClass with an expression",
                                        scrollTo: "using-ngclass-with-an-expression"
                                    },
                                    {
                                        id: "3.4.l1.r3.2",
                                        reightSubMenu: "Using NgClass with a method",
                                        scrollTo: "using-ngclass-with-a-method"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l1.r4",
                                rightMenuTitle: "Setting inline style with NgStyle",
                                scrollToId: "setting-inline-style-with-ngstyle",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l1.r5",
                                rightMenuTitle:
                                    "Displaying and updating properties with ngModel",
                                scrollToId: "displaying-and-updating-properties-with-ngModel",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l1.r5.1",
                                        reightSubMenu: "NgModel and value accessor",
                                        scrollTo: "ngmodel-and-value-accessor"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l1.r6",
                                rightMenuTitle: "Built-in structural directives",
                                scrollToId: "built-in-structural-directives",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l1.r7",
                                rightMenuTitle: "Adding or removing an element with NgIf",
                                scrollToId: "adding-or-removing-an-element-with-ngif",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l1.r7.1",
                                        reightSubMenu: "Guarding against null",
                                        scrollTo: "guarding-against-null"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l1.r8",
                                rightMenuTitle: "Listing items with NgFor",
                                scrollToId: "listing-items-with-ngfor",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l1.r8.1",
                                        reightSubMenu: "Repeating a component view",
                                        scrollTo: "repeating-a-component-view"
                                    },
                                    {
                                        id: "3.4.l1.r8.2",
                                        reightSubMenu: "Getting the index of *ngFor",
                                        scrollTo: "getting-the-index-of-ngfor"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l1.r9",
                                rightMenuTitle: "Repeating elements when a condition is true",
                                scrollToId: "repeating-element-when-a-condition-is-true",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l1.r9.1",
                                        reightSubMenu: "Tracking items with *ngFor trackBy",
                                        scrollTo: "tracking-items-with-ngfor-trackby"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l1.r10",
                                rightMenuTitle: "Hosting a directive without a DOM element",
                                scrollToId: "hosting-a-directive-without-a-dom-element",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l1.r11",
                                rightMenuTitle: "Switching cases with NgSwitch",
                                scrollToId: "switching-cases-with-ngswitch",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l1.r12",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.4.l2",
                        secondLevelSubMenuTitle: "Attribute directives",
                        redirectTo: "attribute-directives",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.4.l2.r1",
                                rightMenuTitle: "Attribute directives",
                                scrollToId: "attribute-directives",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l2.r2",
                                rightMenuTitle: "Building an attribute directive",
                                scrollToId: "building-an-attribute-directive",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l2.r3",
                                rightMenuTitle: "Applying an attribute directive",
                                scrollToId: "applying-an-attribute-directive",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l2.r4",
                                rightMenuTitle: "Handling user events",
                                scrollToId: "handling-user-events",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l2.r5",
                                rightMenuTitle: "Passing values into an attribute directive",
                                scrollToId: "passing-values-into-an-attribute-directive",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l2.r5.1",
                                        reightSubMenu: "Setting the value with user input",
                                        scrollTo: "setting-the-value-with-user-input"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l2.r6",
                                rightMenuTitle: "Binding to a second property",
                                scrollToId: "binding-to-a-second-property",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l2.r7",
                                rightMenuTitle:
                                    "Deactivating Angular processing with NgNonBindable",
                                scrollToId:
                                    "deactivating-angular-processing-with-ngnonbindable",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.4.l3",
                        secondLevelSubMenuTitle: "Structural directives",
                        redirectTo: "structural-directives",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.4.l3.r1",
                                rightMenuTitle: "Structural directives",
                                scrollToId: "structural-directives",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l3.r2",
                                rightMenuTitle: "Structural directive shorthand",
                                scrollToId: "structural-directive-shorthand",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l3.r3",
                                rightMenuTitle: "One structural directive per element",
                                scrollToId: "one-structural-directive-per-element",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l3.r4",
                                rightMenuTitle: "Creating structural directive",
                                scrollToId: "creating-structural-directive",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l3.r4.1",
                                        reightSubMenu: "Testing the directive",
                                        scrollTo: "testing-the-directive"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l3.r5",
                                rightMenuTitle: "Structural directive syntax reference",
                                scrollToId: "structural-directive-syntax-reference",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l3.r5.1",
                                        reightSubMenu: "How Angular translates shorthand",
                                        scrollTo: "how-angular-translates-shorthand"
                                    },
                                    {
                                        id: "3.4.l3.r5.2",
                                        reightSubMenu: "Shorthand examples",
                                        scrollTo: "shorthand-example"
                                    }
                                ]
                            },
                            {
                                id: "3.4.l3.r6",
                                rightMenuTitle:
                                    "Improving template type checking for custom directives",
                                scrollToId:
                                    "improving-template-type-checking-for-custom-directives",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l3.r6.1",
                                        reightSubMenu:
                                            "Making in-template type requirements more specific with template guards",
                                        scrollTo:
                                            "making-in-template-type-requirements-more-specific-with-template-guards"
                                    },
                                    {
                                        id: "3.4.l3.r6.2",
                                        reightSubMenu: "Typing the directive context",
                                        scrollTo: "typing-the-directive-context"
                                    }
                                ]
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.4.l4",
                        secondLevelSubMenuTitle: "Directive composition API",
                        redirectTo: "directive-composition-api",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.4.l4.r1",
                                rightMenuTitle: "Directive composition API",
                                scrollToId: "directive-composition-api",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l4.r2",
                                rightMenuTitle: "Adding directives to a component",
                                scrollToId: "adding-directives-to-a-component",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l4.r3",
                                rightMenuTitle: "Including inputs and outputs",
                                scrollToId: "including-inputs-and-outputs",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l4.r4",
                                rightMenuTitle: "Adding directives to another directive",
                                scrollToId: "adding-directives-to-another-directive",
                                rightMenuSub: []
                            },
                            {
                                id: "3.4.l4.r5",
                                rightMenuTitle: "Host directive semantics",
                                scrollToId: "host-directive-semantics",
                                rightMenuSub: [
                                    {
                                        id: "3.4.l4.r5.1",
                                        reightSubMenu: "Directive execution order",
                                        scrollTo: "directive-execution-order"
                                    },
                                    {
                                        id: "3.4.l4.r5.2",
                                        reightSubMenu: "Dependency injection",
                                        scrollTo: "dependency-injection"
                                    },
                                    {
                                        id: "3.4.l4.r5.3",
                                        reightSubMenu: "Performance",
                                        scrollTo: "performance"
                                    }
                                ]
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "3.5",
                firstLevelSubMenuTitle: "Dependency injection",
                reDirectTo: "dependency-injection",
                secondLevelSubMenu: [
                    {
                        id: "3.5.l1",
                        secondLevelSubMenuTitle: "Dependency injection in Angular",
                        redirectTo: "dependency-injection-in-angular",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.5.l1.r1",
                                rightMenuTitle: "Dependency injection in Angular",
                                scrollToId: "dependency-injection-in-angular",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l1.r3",
                                rightMenuTitle: "Learn about Angular dependency injection",
                                scrollToId: "learn-about-angular-dependency-injection",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.5.l2",
                        secondLevelSubMenuTitle: "Understanding dependency injection",
                        redirectTo: "understanding-dependency-injection",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.5.l2.r1",
                                rightMenuTitle: "Understanding dependency injection",
                                scrollToId: "understanding-dependency-injection",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l2.r2",
                                rightMenuTitle: "Providing dependency",
                                scrollToId: "providing-dependency",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l2.r3",
                                rightMenuTitle: "Injecting a dependency",
                                scrollToId: "injection-a-dependency",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l2.r4",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.5.l3",
                        secondLevelSubMenuTitle: "Creating an injectable service",
                        redirectTo: "creating-an-injectable-service",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.5.l3.r1",
                                rightMenuTitle: "Creating an injectable service",
                                scrollToId: "creating-an-injectable-service",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l3.r2",
                                rightMenuTitle: "Service examples",
                                scrollToId: "service-examples",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l3.r3",
                                rightMenuTitle: "Creating an injectable service",
                                scrollToId: "creating-an-injectable-service",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l3.r4",
                                rightMenuTitle: "Injecting services",
                                scrollToId: "injecting-services",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l3.r5",
                                rightMenuTitle: "Injecting services in other services",
                                scrollToId: "injecting-services-in-other-serviecs",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l3.r6",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.5.l4",
                        secondLevelSubMenuTitle: "Defining dependency providers",
                        redirectTo: "defining-dependency-providers",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.5.l4.r1",
                                rightMenuTitle: "Configuring dependency providers",
                                scrollToId: "configuring-dependency-providers",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l4.r2",
                                rightMenuTitle: "Specifying a provider token",
                                scrollToId: "specifying-a-provider-token",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l4.r2.1",
                                        reightSubMenu: "Class providers: useclass",
                                        scrollTo: "class-providers-useclass"
                                    },
                                    {
                                        id: "3.5.l4.r2.2",
                                        reightSubMenu: "Alias provider: useExisting",
                                        scrollTo: "alias-provider-useexisting"
                                    },
                                    {
                                        id: "3.5.l4.r2.3",
                                        reightSubMenu: "Factory provider: useFactory",
                                        scrollTo: "factory-provider-usefactory"
                                    },
                                    {
                                        id: "3.5.l4.r2.4",
                                        reightSubMenu: "Value provider: useValue",
                                        scrollTo: "value-provider-usevalue"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l4.r3",
                                rightMenuTitle: "Using an InjectionToken object",
                                scrollToId: "using-an-injectiontoken-object",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l4.r3.1",
                                        reightSubMenu: "Interfaces and DI",
                                        scrollTo: "interface-and-di"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l4.r4",
                                rightMenuTitle: "What's next",
                                scrollToId: "what-is-next",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "3.5.l5",
                        secondLevelSubMenuTitle: "Hierarchial injectors",
                        redirectTo: "hierarchial-injectors",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "3.5.l5.r1",
                                rightMenuTitle: "Hierarchial injectors",
                                scrollToId: "hierarchial-injectors",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l5.r2",
                                rightMenuTitle: "Types of injectors hierarchies",
                                scrollToId: "types-of-injectors-hierarchies",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l5.r2.1",
                                        reightSubMenu: "ModuleInjector",
                                        scrollTo: "moduleinjector"
                                    },
                                    {
                                        id: "3.5.l5.r2.2",
                                        reightSubMenu: "ElementInjector",
                                        scrollTo: "elementinjector"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l5.r3",
                                rightMenuTitle: "Resolution rules",
                                scrollToId: "resolution-rules",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l5.r4",
                                rightMenuTitle: "Resolution modifiers",
                                scrollToId: "resolution-modifiers",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l5.r4.1",
                                        reightSubMenu: "Types of modifiers",
                                        scrollTo: "types-of-modifiers"
                                    },
                                    {
                                        id: "3.5.l5.r4.2",
                                        reightSubMenu: "@Optional()",
                                        scrollTo: "optional"
                                    },
                                    {
                                        id: "3.5.l5.r4.3",
                                        reightSubMenu: "@Self()",
                                        scrollTo: "self"
                                    },
                                    {
                                        id: "3.5.l5.r4.4",
                                        reightSubMenu: "@SkipSelf",
                                        scrollTo: "skipself"
                                    },
                                    {
                                        id: "3.5.l5.r4.5",
                                        reightSubMenu: "@Host",
                                        scrollTo: "host"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l5.r5",
                                rightMenuTitle: "Logical structure of the template",
                                scrollToId: "logicial-structure-of-the-template",
                                rightMenuSub: []
                            },
                            {
                                id: "3.5.l5.r6",
                                rightMenuTitle: "Providing services in @component()",
                                scrollToId: "providing-services-in-component",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l5.r6.1",
                                        reightSubMenu: "Example app structure",
                                        scrollTo: "example-app-structure"
                                    },
                                    {
                                        id: "3.5.l5.r6.2",
                                        reightSubMenu: "Using the providers array",
                                        scrollTo: "using-the-providers-array"
                                    },
                                    {
                                        id: "3.5.l5.r6.3",
                                        reightSubMenu: "Using the viewProviders array",
                                        scrollTo: "using-the-viewproviders-array"
                                    },
                                    {
                                        id: "3.5.l5.r6.4",
                                        reightSubMenu: "Provider vs. viewProvider",
                                        scrollTo: "provider-vs-viewprovider"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l5.r7",
                                rightMenuTitle: "Modifying service visibility",
                                scrollToId: "modifying-service-visibility",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l5.r7.1",
                                        reightSubMenu: "Visibility of provider tokens",
                                        scrollTo: "visibility-of-provider-tokens"
                                    },
                                    {
                                        id: "3.5.l5.r7.2",
                                        reightSubMenu: "@SkipSelf() and viewProviders",
                                        scrollTo: "skipself-and-viewproviders"
                                    },
                                    {
                                        id: "3.5.l5.r7.3",
                                        reightSubMenu: "@Host and viewProviders",
                                        scrollTo: "host-and-viewproviders"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l5.r8",
                                rightMenuTitle: "ElementInjector use case examples",
                                scrollToId: "elementinjector-use-case-examples",
                                rightMenuSub: [
                                    {
                                        id: "3.5.l5.r8.1",
                                        reightSubMenu: "Scenario: service isolation",
                                        scrollTo: "scenarion-service-isolation"
                                    },
                                    {
                                        id: "3.5.l5.r8.2",
                                        reightSubMenu: "Scenario: multiple edit sessions",
                                        scrollTo: "scenarion-multiple-edit-sessions"
                                    },
                                    {
                                        id: "3.5.l5.r8.3",
                                        reightSubMenu: "Scenario: specialized providers",
                                        scrollTo: "scenarion-specialized-providers"
                                    }
                                ]
                            },
                            {
                                id: "3.5.l5.r9",
                                rightMenuTitle: "More on dependency injection",
                                scrollToId: "more-on-dependency-injection",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 4 - Developer guides
    {
        id: "4",
        leftMenuTitle: "Developer guides",
        redirectTo: "developer-guides",
        firstLevelSubMenu: [
            {
                id: "4.1",
                firstLevelSubMenuTitle: "Overview",
                reDirectTo: "overview",
                secondLevelSubMenu: [],
                rightMenu: [
                    {
                        id: "4.1.r1",
                        rightMenuTitle: "Angular Developer guides",
                        scrollToId: "angular-developer-guides",
                        rightMenuSub: []
                    },
                    {
                        id: "4.1.r2",
                        rightMenuTitle: "Prerequisites",
                        scrollToId: "prerequisites",
                        rightMenuSub: []
                    },
                    {
                        id: "4.1.r3",
                        rightMenuTitle: "Learn about Angular's features",
                        scrollToId: "learn-about-angulars-features",
                        rightMenuSub: []
                    }
                ],
                select: false
            },
            {
                id: "4.2",
                firstLevelSubMenuTitle: "Standalone",
                reDirectTo: "standalone",
                secondLevelSubMenu: [
                    {
                        id: "4.2.l1",
                        secondLevelSubMenuTitle: "Standalone components",
                        redirectTo: "standalone-components",
                        thirdLevelSubMenu: [
                            {
                                id: "4.2.l1.1",
                                thirdLevelSubMenuTitle: "Standalone components",
                                redirectTo: "standalone-components",
                                rightMenu: [
                                    {
                                        id: "4.2.l1.1.r1",
                                        rightMenuTitle:
                                            "Getting started with standalone components",
                                        scrollToId: "getting-started-with-standalone-components",
                                        rightMenuSub: [
                                            {
                                                id: "4.2.l1.1.r1.1",
                                                reightSubMenu:
                                                    "The standalone flag and component imports",
                                                scrollTo: "the-standalone-flag-and-component-imports"
                                            },
                                            {
                                                id: "4.2.l1.1.r1.2",
                                                reightSubMenu:
                                                    "Using exisitng NgModules in a standalone component",
                                                scrollTo:
                                                    "using-existing-ngmodules-in-a-standalone-component"
                                            }
                                        ]
                                    },
                                    {
                                        id: "4.2.l1.1.r2",
                                        rightMenuTitle: "Creating standalone components",
                                        scrollToId: "creating-standalone-components",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.1.r3",
                                        rightMenuTitle:
                                            "Using standalone components in NgModule-based applications",
                                        scrollToId:
                                            "using-standalone-components-in-ngmodule-based-applications",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.1.r4",
                                        rightMenuTitle:
                                            "Bootstraping an application using a standalone component",
                                        scrollToId:
                                            "bootstraping-an-application-using-a-standalone-component",
                                        rightMenuSub: [
                                            {
                                                id: "4.2.l1.1.r4.1",
                                                reightSubMenu: "Configuring dependency injection",
                                                scrollTo: "configuring-dependency-injection"
                                            }
                                        ]
                                    },
                                    {
                                        id: "4.2.l1.1.r5",
                                        rightMenuTitle: "Routing and lazy-loading",
                                        scrollToId: "routing-and-lazy-loading",
                                        rightMenuSub: [
                                            {
                                                id: "4.2.l1.1.r5.1",
                                                reightSubMenu: "Lazy loading a standalone component",
                                                scrollTo: "lazy-loading-a-standalone-component"
                                            },
                                            {
                                                id: "4.2.l1.1.r5.2",
                                                reightSubMenu: "Lazy loading many routes at once",
                                                scrollTo: "lazy-loading-many-routes-at-once"
                                            },
                                            {
                                                id: "4.2.l1.1.r5.3",
                                                reightSubMenu: "Lazy loading and default exports",
                                                scrollTo: "lazy-loading-and-default-exports"
                                            },
                                            {
                                                id: "4.2.l1.1.r5.4",
                                                reightSubMenu:
                                                    "Providing services to a subset of routes",
                                                scrollTo: "providing-services-to-a-subset-of-routes"
                                            }
                                        ]
                                    },
                                    {
                                        id: "4.2.l1.1.r6",
                                        rightMenuTitle: "Advanced topics",
                                        scrollToId: "advanced-topics",
                                        rightMenuSub: [
                                            {
                                                id: "4.2.l1.1.r6.1",
                                                reightSubMenu:
                                                    "Standalone components for library authors",
                                                scrollTo: "standalone-components-for-library-authors"
                                            },
                                            {
                                                id: "4.2.l1.1.r6.2",
                                                reightSubMenu:
                                                    "Dependency injection and injectors hierarchy",
                                                scrollTo: "dependency-injection-and-injectors-hierarchy"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "4.2.l1.2",
                                thirdLevelSubMenuTitle: "Migrating to components",
                                redirectTo: "migrating-to-components",
                                rightMenu: [
                                    {
                                        id: "4.2.l1.2.r1",
                                        rightMenuTitle:
                                            "Migrating an existing Angular project to standalone",
                                        scrollToId:
                                            "migrating-an-existing-angular-project-to-standalone",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.2.r2",
                                        rightMenuTitle: "Prerequisites",
                                        scrollToId: "prerequisites",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.2.r3",
                                        rightMenuTitle: "Schematic options",
                                        scrollToId: "schematic-options",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.2.r4",
                                        rightMenuTitle: "Migrations steps",
                                        scrollToId: "migrations-steps",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.2.r5",
                                        rightMenuTitle: "After the migration",
                                        scrollToId: "after-the-migration",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.2.r6",
                                        rightMenuTitle: "Migration modes",
                                        scrollToId: "migration-modes",
                                        rightMenuSub: [
                                            {
                                                id: "4.2.l1.2.r6.1",
                                                reightSubMenu: "Convert declarations to standalone",
                                                scrollTo: "convert-declaration-to-standalone"
                                            },
                                            {
                                                id: "4.2.l1.2.r6.2",
                                                reightSubMenu: "Remove unnecessary NgModules",
                                                scrollTo: "remove-unnecessary-ngmodules"
                                            },
                                            {
                                                id: "4.2.l1.2.r6.3",
                                                reightSubMenu: "Switch to standalone bootstraping API",
                                                scrollTo: "switch-to-standalone-bootstraping-api"
                                            }
                                        ]
                                    },
                                    {
                                        id: "4.2.l1.2.r7",
                                        rightMenuTitle: "Common problems",
                                        scrollToId: "common-problems",
                                        rightMenuSub: []
                                    },
                                    {
                                        id: "4.2.l1.2.r8",
                                        rightMenuTitle: "Limitations",
                                        scrollToId: "limitations",
                                        rightMenuSub: []
                                    }
                                ]
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.2.l2",
                        secondLevelSubMenuTitle: "Migrating to standalone",
                        redirectTo: "migrating-to-standalone",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.3",
                firstLevelSubMenuTitle: "Change detection",
                reDirectTo: "change-detection",
                secondLevelSubMenu: [
                    {
                        id: "4.3.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.3.l2",
                        secondLevelSubMenuTitle: "Zone pollution",
                        redirectTo: "zone-pollution",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.3.l2.r1",
                                rightMenuTitle: "Resolving zone pollution",
                                scrollToId: "resolving-zone-pollution",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l2.r2",
                                rightMenuTitle:
                                    "Identifying unnecessary change detection calls",
                                scrollToId: "identifying-unnecessary-change-detection-calls",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l2.r3",
                                rightMenuTitle: "Run tasks outside NgZone",
                                scrollToId: "run-tasks-outsides-ngzone",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.3.l3",
                        secondLevelSubMenuTitle: "Slow computations",
                        redirectTo: "slow-computations",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.3.l3.r1",
                                rightMenuTitle: "Slow computations",
                                scrollToId: "slow-computations",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l3.r2",
                                rightMenuTitle: "Identifying slow computations",
                                scrollToId: "identifying-slow-computations",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l3.r3",
                                rightMenuTitle: "Optimizing slow computations",
                                scrollToId: "optimizing-slow-computations",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.3.l4",
                        secondLevelSubMenuTitle: "Skipping component subtrees",
                        redirectTo: "skipping-component-subtrees",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.3.l4.r1",
                                rightMenuTitle: "Skipping component subtrees",
                                scrollToId: "skipping-component-subtrees",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r2",
                                rightMenuTitle: "Using OnPush",
                                scrollToId: "using-onpush",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r3",
                                rightMenuTitle: "Common change detection scenarios",
                                scrollToId: "common-change-detection-scenarios",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r4",
                                rightMenuTitle:
                                    "An event is handled by a component with default change detection",
                                scrollToId:
                                    "an-event-is-handled-by-a-component-with-default-change-detection",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r5",
                                rightMenuTitle:
                                    "An event is handled by a component with OnPush",
                                scrollToId: "an-event-is-handled-by-a-component-with-onpush",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r6",
                                rightMenuTitle:
                                    "An event is handled by a descendant of a component with OnPush",
                                scrollToId:
                                    "an-event-is-handled-by-a-descendant-of-a-component-with-onpush",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r7",
                                rightMenuTitle: "New inputs to component with OnPush",
                                scrollToId: "new-inputs-to-component-with-onpush",
                                rightMenuSub: []
                            },
                            {
                                id: "4.3.l4.r8",
                                rightMenuTitle: "Edge cases",
                                scrollToId: "edge-cases",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.4",
                firstLevelSubMenuTitle: "Routing and navigation",
                reDirectTo: "routing-and-navigation",
                secondLevelSubMenu: [
                    {
                        id: "4.4.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.4.l1.r1",
                                rightMenuTitle: "Angular Routing",
                                scrollToId: "angular-routing",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l1.r3",
                                rightMenuTitle: "Learn about Angular routing",
                                scrollToId: "learn-about-angular-routing",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.4.l2",
                        secondLevelSubMenuTitle: "Common routing tasks",
                        redirectTo: "common-routing-tasks",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.4.l2.r1",
                                rightMenuTitle: "Common Routing Tasks",
                                scrollToId: "common-routing-tasks",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r2",
                                rightMenuTitle: "Generate an application with routing enabled",
                                scrollToId: "generate-an-application-with-routing-enabled",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l2.r2.1",
                                        reightSubMenu: "Adding components for routing",
                                        scrollTo: "adding-components-for-routing"
                                    },
                                    {
                                        id: "4.4.l2.r2.2",
                                        reightSubMenu: "Importing your new components",
                                        scrollTo: "importing-your-new-components"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l2.r3",
                                rightMenuTitle: "Defining a basic route",
                                scrollToId: "defining-a-basic-route",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l2.r3.1",
                                        reightSubMenu: "Route order",
                                        scrollTo: "route-order"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l2.r4",
                                rightMenuTitle: "Getting route information",
                                scrollToId: "getting-route-information",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r5",
                                rightMenuTitle: "Setting up wildcard routes",
                                scrollToId: "setting-up-wildcard-routes",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r6",
                                rightMenuTitle: "Displaying a 404 page",
                                scrollToId: "displaying-a-404-page",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r7",
                                rightMenuTitle: "Setting up redirects",
                                scrollToId: "setting-up-redirects",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r8",
                                rightMenuTitle: "Nesting routes",
                                scrollToId: "nesting-routes",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r9",
                                rightMenuTitle: "Setting the page title",
                                scrollToId: "setting-the-page-title",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r10",
                                rightMenuTitle: "Using relative paths",
                                scrollToId: "using-relative-paths",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l2.r10.1",
                                        reightSubMenu: "Specifying a relative route",
                                        scrollTo: "specifying-a-relative-route"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l2.r11",
                                rightMenuTitle: "Accessing query parameters and fragments",
                                scrollToId: "accessing-query-parameters and fragments",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r12",
                                rightMenuTitle: "lazy loading",
                                scrollToId: "lazy-loading",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r13",
                                rightMenuTitle: "Preventing unauthorized access",
                                scrollToId: "preventing-unauthorized-access",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r14",
                                rightMenuTitle: "Link parameters array",
                                scrollToId: "link-parameters-array",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r15",
                                rightMenuTitle: "LocationStrategy and browser URL styles",
                                scrollToId: "locationstrategy-and-browser-url-styles",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r16",
                                rightMenuTitle: "Choosing a routing strategy",
                                scrollToId: "choosing-a-routing-strategy",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l2.r17",
                                rightMenuTitle: "<base href>",
                                scrollToId: "base-href",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l2.r17.1",
                                        reightSubMenu: "HTML5 URLs and the <base href>",
                                        scrollTo: "html5-urls-and-the-base-href"
                                    },
                                    {
                                        id: "4.4.l2.r17.2",
                                        reightSubMenu: "HashLocationStrategy",
                                        scrollTo: "hashlocationstrategy"
                                    }
                                ]
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.4.l3",
                        secondLevelSubMenuTitle:
                            "Tutorial:routes in single-page application",
                        redirectTo: "tutorial-routes-in-a-single-page-application",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.4.l3.r1",
                                rightMenuTitle:
                                    "Using Angular routes in a single-page application",
                                scrollToId: "using-angular-routes-in-a-sigle-page-application",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r2",
                                rightMenuTitle: "Objectives",
                                scrollToId: "objectives",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r4",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r5",
                                rightMenuTitle: "Create a sample application",
                                scrollToId: "create-a-sample-application",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r6",
                                rightMenuTitle: "Import RouterModule from @angular/router",
                                scrollToId: "import-eouter-module-from-angular-router",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r7",
                                rightMenuTitle: "Define your routes",
                                scrollToId: "define-your-routes",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r8",
                                rightMenuTitle: "Update your component with router-outlet",
                                scrollToId: "update-your-coomponent-with-router-outlet",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r9",
                                rightMenuTitle: "Control navigation with UI elements",
                                scrollToId: "control-navigation-with-ui-elements",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r10",
                                rightMenuTitle: "Identify the active route",
                                scrollToId: "identify-the-active-route",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r11",
                                rightMenuTitle: "Adding a redirect",
                                scrollToId: "adding-a-redirect",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r12",
                                rightMenuTitle: "Adding a 404 page",
                                scrollToId: "adding-a-404-page",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l3.r13",
                                rightMenuTitle: "Next steps",
                                scrollToId: "next-steps",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.4.l4",
                        secondLevelSubMenuTitle: "Tutorial: creating custom route matches",
                        redirectTo: "tutorial-creating-custom-route-matches",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.4.l4.r1",
                                rightMenuTitle: "Tutorial: Creating custom route matches",
                                scrollToId: "tutorial-creating-custom-route-matches",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r2",
                                rightMenuTitle: "Objectives",
                                scrollToId: "objectives",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r3",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r4",
                                rightMenuTitle: "Create a sample application",
                                scrollToId: "create-a-sample-application",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r5",
                                rightMenuTitle: "Configure your routes for your application",
                                scrollToId: "configure-your-routes-for-your-application",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r6",
                                rightMenuTitle: "Subscripbe to the route parameters",
                                scrollToId: "subscribe-to-the-route-parameters",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r7",
                                rightMenuTitle: "Test your custom URL matcher",
                                scrollToId: "test-yout-custom-url-matcher",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l4.r7",
                                rightMenuTitle: "Next steps",
                                scrollToId: "next-steps",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.4.l5",
                        secondLevelSubMenuTitle:
                            "Tutorial: Adding routing to tour of Heroes",
                        redirectTo: "tutorial-adding-routing-to-tour-of-heroes",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.4.l5.r1",
                                rightMenuTitle: "Router tutorial: tour of Heroes",
                                scrollToId: "router-tutorial-tour-of-heroes",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l5.r2",
                                rightMenuTitle: "Objective",
                                scrollToId: "objective",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l5.r3",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l5.r4",
                                rightMenuTitle: "The sample application in action",
                                scrollToId: "the-sample-application-in-action",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l5.r5",
                                rightMenuTitle: "Milestone 1: Getting started",
                                scrollToId: "milestone1-getting-started",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l5.r5.1",
                                        reightSubMenu: "Create a sample application",
                                        scrollTo: "create-a-sample-application"
                                    },
                                    {
                                        id: "4.4.l5.r5.2",
                                        reightSubMenu: "Define Routes",
                                        scrollTo: "define-routes"
                                    },
                                    {
                                        id: "4.4.l5.r5.3",
                                        reightSubMenu: "Register Router and Routes",
                                        scrollTo: "register-router-and-routes"
                                    },
                                    {
                                        id: "4.4.l5.r5.4",
                                        reightSubMenu: "Add the Router Outlet",
                                        scrollTo: "add-the-router-outlet"
                                    },
                                    {
                                        id: "4.4.l5.r5.5",
                                        reightSubMenu: "Define Wildcard route",
                                        scrollTo: "define-wildcard-route"
                                    },
                                    {
                                        id: "4.4.l5.r5.6",
                                        reightSubMenu: "Set up redirects",
                                        scrollTo: "set-up-redirects"
                                    },
                                    {
                                        id: "4.4.l5.r5.7",
                                        reightSubMenu: "Milestone 1 wrap up",
                                        scrollTo: "milestone1-wrap-up"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l5.r6",
                                rightMenuTitle: "Milestone 2: Routing module",
                                scrollToId: "milestone2-routing-module",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l5.r6.1",
                                        reightSubMenu: "Integrate routing with your app",
                                        scrollTo: "integrate-routing-with-your-app"
                                    },
                                    {
                                        id: "4.4.l5.r6.2",
                                        reightSubMenu:
                                            "Refactor the routing configuration into a routing module",
                                        scrollTo: "define-routes"
                                    },
                                    {
                                        id: "4.4.l5.r6.3",
                                        reightSubMenu: "Benefits of a routing module",
                                        scrollTo: "benefits-of-a-routing-module"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l5.r7",
                                rightMenuTitle: "Milestone 3: Heroes feature",
                                scrollToId: "milestone3-heroes-feature",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l5.r7.1",
                                        reightSubMenu: "Add heroes functionality",
                                        scrollTo: "add-heroes-functionality"
                                    },
                                    {
                                        id: "4.4.l5.r7.2",
                                        reightSubMenu: "Module import order",
                                        scrollTo: "module-import-order"
                                    },
                                    {
                                        id: "4.4.l5.r7.3",
                                        reightSubMenu: "Route parameters",
                                        scrollTo: "route-paramenters"
                                    },
                                    {
                                        id: "4.4.l5.r7.4",
                                        reightSubMenu: "Activated Route in action",
                                        scrollTo: "activated-route-in-action"
                                    },
                                    {
                                        id: "4.4.l5.r7.5",
                                        reightSubMenu: "Navigating back to the list component",
                                        scrollTo: "navigating-back-to-the-list-component"
                                    },
                                    {
                                        id: "4.4.l5.r7.6",
                                        reightSubMenu:
                                            "Route parameters in the ActivatedRoute service",
                                        scrollTo: "route-parameters-in-the-activatesroute-service"
                                    },
                                    {
                                        id: "4.4.l5.r7.7",
                                        reightSubMenu: "Adding routable animations",
                                        scrollTo: "adding-routable-animations"
                                    },
                                    {
                                        id: "4.4.l5.r7.8",
                                        reightSubMenu: "Milestone 3 wrap up",
                                        scrollTo: "milestone3-wrap-up"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l5.r8",
                                rightMenuTitle: "Milestone 4: Crisis center feature",
                                scrollToId: "mileston4-crisis-center-feature",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l5.r8.1",
                                        reightSubMenu: "A crisis center with child routes",
                                        scrollTo: "a-crisis-center-with-child-routes"
                                    },
                                    {
                                        id: "4.4.l5.r8.2",
                                        reightSubMenu: "Child routing component",
                                        scrollTo: "child-routing-component"
                                    },
                                    {
                                        id: "4.4.l5.r8.3",
                                        reightSubMenu: "Child route configuration",
                                        scrollTo: "child-route-configuration"
                                    },
                                    {
                                        id: "4.4.l5.r8.4",
                                        reightSubMenu:
                                            "Import crisis center module into the AppModule routes",
                                        scrollTo:
                                            "import-crisis-center-module-into-the-appmodule-routes"
                                    },
                                    {
                                        id: "4.4.l5.r8.5",
                                        reightSubMenu: "Relative navigation",
                                        scrollTo: "relative-navigation"
                                    },
                                    {
                                        id: "4.4.l5.r8.6",
                                        reightSubMenu:
                                            "Navigate to crisis list with a relative URL",
                                        scrollTo: "navigate-to-crisis-list-with-a-relative-url"
                                    },
                                    {
                                        id: "4.4.l5.r8.7",
                                        reightSubMenu:
                                            "Displaying multiple routes in named outlets",
                                        scrollTo: "displaying-multiple-routes-in-named-outlets"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l5.r9",
                                rightMenuTitle: "Milestone 5: Route gaurds",
                                scrollToId: "milestone5-route-gaurds",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l5.r9.1",
                                        reightSubMenu: "canActivate: requiring authentication",
                                        scrollTo: "canactivate-requiring-authentication"
                                    },
                                    {
                                        id: "4.4.l5.r9.2",
                                        reightSubMenu: "CanActivateChild: guarding child routes",
                                        scrollTo: "canactivatechild-guarding-child-routes"
                                    },
                                    {
                                        id: "4.4.l5.r9.3",
                                        reightSubMenu: "CanDeactivate: handling unsaved changes",
                                        scrollTo: "candeactivate-handling-unsaved-changes"
                                    },
                                    {
                                        id: "4.4.l5.r9.4",
                                        reightSubMenu: "Resolve: pre-fetching component data",
                                        scrollTo: "resolve-pre-fetching-component-data"
                                    },
                                    {
                                        id: "4.4.l5.r9.5",
                                        reightSubMenu: "Query parameters and fragments",
                                        scrollTo: "query-parameters-and-fragments"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l5.r10",
                                rightMenuTitle: "Milestone 6: Asynchronous routing",
                                scrollToId: "milestone6-asynchronous-routing",
                                rightMenuSub: [
                                    {
                                        id: "4.4.l5.r10.1",
                                        reightSubMenu: "LazyLoading route configuration",
                                        scrollTo: "lazyloading-route-configuration"
                                    },
                                    {
                                        id: "4.4.l5.r10.2",
                                        reightSubMenu:
                                            "CanMatch: guarding unauthorized access of feature modules",
                                        scrollTo:
                                            "canmatch-guarding-unauthorized-access-of-feature-modles"
                                    },
                                    {
                                        id: "4.4.l5.r10.3",
                                        reightSubMenu:
                                            "Preloading: background loading of feature areas",
                                        scrollTo: "preloading-background-loading-of-feature-areas"
                                    },
                                    {
                                        id: "4.4.l5.r10.4",
                                        reightSubMenu: "Custom preloading strategy",
                                        scrollTo: "custom-preloading-strategy"
                                    },
                                    {
                                        id: "4.4.l5.r10.5",
                                        reightSubMenu: "Migrating URLs with redirects",
                                        scrollTo: "migrating-urls-with-redirects"
                                    },
                                    {
                                        id: "4.4.l5.r10.6",
                                        reightSubMenu: "Inspect the router's configuration",
                                        scrollTo: "inspect-the-routers-configuration"
                                    }
                                ]
                            },
                            {
                                id: "4.4.l5.r11",
                                rightMenuTitle: "Final application",
                                scrollToId: "final-application",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.4.l6",
                        secondLevelSubMenuTitle: "Router reference",
                        redirectTo: "router-reference",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.4.l6.r1",
                                rightMenuTitle: "Router reference",
                                scrollToId: "router-reference",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r2",
                                rightMenuTitle: "Router imports",
                                scrollToId: "router-imports",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r3",
                                rightMenuTitle: "Configuration",
                                scrollToId: "configuration",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r4",
                                rightMenuTitle: "Router outlet",
                                scrollToId: "router-outlet",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r5",
                                rightMenuTitle: "Router links",
                                scrollToId: "router-links",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r6",
                                rightMenuTitle: "Active router links",
                                scrollToId: "active-router-links",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r7",
                                rightMenuTitle: "Router state",
                                scrollToId: "router-state",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r8",
                                rightMenuTitle: "Activated route",
                                scrollToId: "activated-route",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r9",
                                rightMenuTitle: "Router events",
                                scrollToId: "router-events",
                                rightMenuSub: []
                            },
                            {
                                id: "4.4.l6.r10",
                                rightMenuTitle: "Router terminology",
                                scrollToId: "router-terminology",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.5",
                firstLevelSubMenuTitle: "Forms",
                reDirectTo: "forms",
                secondLevelSubMenu: [
                    {
                        id: "4.5.l1",
                        secondLevelSubMenuTitle: "Introduction",
                        redirectTo: "introduction",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.5.l1.r1",
                                rightMenuTitle: "Introduction to forms in Angular",
                                scrollToId: "introduction-to-forms-in-angular",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l1.r3",
                                rightMenuTitle: "Choosing an approach",
                                scrollToId: "choosing-an-approach",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l1.r3.1",
                                        reightSubMenu: "Key differences",
                                        scrollTo: "key-differences"
                                    },
                                    {
                                        id: "4.5.l1.r3.2",
                                        reightSubMenu: "Scalability",
                                        scrollTo: "scalability"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l1.r4",
                                rightMenuTitle: "Setting up the form model",
                                scrollToId: "setting-up-the-form-model",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l1.r4.1",
                                        reightSubMenu: "Common form foundation classes",
                                        scrollTo: "common-form-foundation-classes"
                                    },
                                    {
                                        id: "4.5.l1.r4.2",
                                        reightSubMenu: "Setup in reactive forms",
                                        scrollTo: "setup-in-reactive-forms"
                                    },
                                    {
                                        id: "4.5.l1.r4.3",
                                        reightSubMenu: "Setup in template-driven forms",
                                        scrollTo: "setup-in-template-driven-forms"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l1.r5",
                                rightMenuTitle: "Data flow in forms",
                                scrollToId: "data-flow-in-forms",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l1.r5.1",
                                        reightSubMenu: "Data flow in reactive forms",
                                        scrollTo: "data-flow-in-reactive-forms"
                                    },
                                    {
                                        id: "4.5.l1.r5.2",
                                        reightSubMenu: "Data flow in template-driven forms",
                                        scrollTo: "data-flow-in-template-driven-forms"
                                    },
                                    {
                                        id: "4.5.l1.r5.3",
                                        reightSubMenu: "Mutability of the data modal",
                                        scrollTo: "mutability-of-the-data-modal"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l1.r6",
                                rightMenuTitle: "Form validation",
                                scrollToId: "form-validation",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l1.r7",
                                rightMenuTitle: "Testing",
                                scrollToId: "testing",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l1.r7.1",
                                        reightSubMenu: "Testing reactive forms",
                                        scrollTo: "testing-reactive-forms"
                                    },
                                    {
                                        id: "4.5.l1.r7.2",
                                        reightSubMenu: "Testing template-driven forms",
                                        scrollTo: "testing-template-driven-forms"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l1.r8",
                                rightMenuTitle: "Next Steps",
                                scrollToId: "next-steps",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.5.l2",
                        secondLevelSubMenuTitle: "Reactive forms",
                        redirectTo: "reactive-forms",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.5.l2.r1",
                                rightMenuTitle: "Reactive Forms",
                                scrollToId: "reactive-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l2.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l2.r3",
                                rightMenuTitle: "Overview of reactive forms",
                                scrollToId: "overview-of-rective-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l2.r4",
                                rightMenuTitle: "Adding a basic form control",
                                scrollToId: "adding-a-basic-form-control",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l2.r4.1",
                                        reightSubMenu: "Deploying form control value",
                                        scrollTo: "deploying-form-control-value"
                                    },
                                    {
                                        id: "4.5.l2.r4.2",
                                        reightSubMenu: "Replacing form control value",
                                        scrollTo: "replacing-form-control-value"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l2.r5",
                                rightMenuTitle: "Grouping form controls",
                                scrollToId: "grouping-form-controls",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l2.r5.1",
                                        reightSubMenu: "Creating nested form groups",
                                        scrollTo: "creating-nested-form-groups"
                                    },
                                    {
                                        id: "4.5.l2.r5.2",
                                        reightSubMenu: "Updating parts of the data model",
                                        scrollTo: "updating-parts-of-the-data-model"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l2.r6",
                                rightMenuTitle:
                                    "Using the FormBuilder service to generate controls",
                                scrollToId:
                                    "using-the-formbuilder-service-to-generate-controls",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l2.r7",
                                rightMenuTitle: "Validating form input",
                                scrollToId: "validating-form-input",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l2.r8",
                                rightMenuTitle: "Creating dynamic forms",
                                scrollToId: "creating-dynamic-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l2.r9",
                                rightMenuTitle: "Reactive forms API summary",
                                scrollToId: "reactive-forms-api-summary",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.5.l3",
                        secondLevelSubMenuTitle: "Strictly typed reactive forms in depth",
                        redirectTo: "strictly-typed-reactive-forms-in-depth",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.5.l3.r1",
                                rightMenuTitle: "Types forms",
                                scrollToId: "typed-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l3.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l3.r3",
                                rightMenuTitle: "Overview of Typed forms",
                                scrollToId: "overview-of-typed-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l3.r4",
                                rightMenuTitle: "Automated Untyped Forms Migration",
                                scrollToId: "automated-untyped-forms-migration",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l3.r5",
                                rightMenuTitle: "FormControl: Getting Started",
                                scrollToId: "formcontrol-getting-started",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l3.r5.1",
                                        reightSubMenu: "Nullability",
                                        scrollTo: "nullability"
                                    },
                                    {
                                        id: "4.5.l3.r5.2",
                                        reightSubMenu: "Specifying an Explicit Type",
                                        scrollTo: "creating-nested-form-groups"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l3.r6",
                                rightMenuTitle: "FormArray: Dynamic,Homogenous Collections",
                                scrollToId: "formarray-dynamic-homogenous-collections",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l3.r7",
                                rightMenuTitle: "FormGroup and FormRecord",
                                scrollToId: "formgroup-and-formrecord",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l3.r7.1",
                                        reightSubMenu: "Partial Values",
                                        scrollTo: "partial-values"
                                    },
                                    {
                                        id: "4.5.l3.r7.2",
                                        reightSubMenu: "Optional Controls and Dynamic Groups",
                                        scrollTo: "optional-controls-and-dynamic-groups"
                                    },
                                    {
                                        id: "4.5.l3.r7.3",
                                        reightSubMenu: "FormRecord",
                                        scrollTo: "formrecord"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l3.r8",
                                rightMenuTitle: "FromBuilder and NonNUllableFormBuilder",
                                scrollToId: "formbuilder-and-nonnullableformbuilder",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.5.l4",
                        secondLevelSubMenuTitle: "Validating form input",
                        redirectTo: "validating-form-input",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.5.l4.r1",
                                rightMenuTitle: "Validating form input",
                                scrollToId: "validating-form-input",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l4.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l4.r3",
                                rightMenuTitle: "Validating input in template-driven forms",
                                scrollToId: "validating-input-in-template-driven-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l4.r4",
                                rightMenuTitle: "Validating input in reactive forms",
                                scrollToId: "validating-input-in-reactive-forms",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l4.r4.1",
                                        reightSubMenu: "Validator functions",
                                        scrollTo: "validator-functions"
                                    },
                                    {
                                        id: "4.5.l4.r4.2",
                                        reightSubMenu: "Built-in validator functions",
                                        scrollTo: "built-in-validator-functions"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l4.r5",
                                rightMenuTitle: "Defining custom validators",
                                scrollToId: "defining-custom-validators",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l4.r5.1",
                                        reightSubMenu: "Adding custom validators to reactive forms",
                                        scrollTo: "adding-custom-validators-to-reactive-forms"
                                    },
                                    {
                                        id: "4.5.l4.r5.2",
                                        reightSubMenu:
                                            "Adding custom validators to template-driven forms",
                                        scrollTo:
                                            "adding-custom-validators-to-template-driven-forms"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l4.r6",
                                rightMenuTitle: "Control status CSS classes",
                                scrollToId: "control-status-css-classes",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l4.r7",
                                rightMenuTitle: "Cross-field validation",
                                scrollToId: "cross-field-validation",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l4.r7.1",
                                        reightSubMenu: "Adding cross-validation to reactive forms",
                                        scrollTo: "adding-cross-validation-to-reactive-forms"
                                    },
                                    {
                                        id: "4.5.l4.r7.2",
                                        reightSubMenu:
                                            "Adding cross-validation to template-driven forms",
                                        scrollTo: "adding-cross-validation-to-template-driven-forms"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l4.r8",
                                rightMenuTitle: "Creating asynchronous validators",
                                scrollToId: "creating-asynchronous-validators",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l4.r8.1",
                                        reightSubMenu: "Implementing a custom async validator",
                                        scrollTo: "implementing-a-custom-async-validator"
                                    },
                                    {
                                        id: "4.5.l4.r8.2",
                                        reightSubMenu: "Adding async validators to reactive forms",
                                        scrollTo: "adding-async-validators-to-reactive-forms"
                                    },
                                    {
                                        id: "4.5.l4.r8.3",
                                        reightSubMenu:
                                            "Adding async validators to template-driven forms",
                                        scrollTo: "adding-async validators-to-template-driven-forms"
                                    },
                                    {
                                        id: "4.5.l4.r8.4",
                                        reightSubMenu: "Optimizing performance to async validators",
                                        scrollTo: "optimizing-performance-to-async-validators"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l4.r9",
                                rightMenuTitle: "Interaction with native HTML form validation",
                                scrollToId: "interaction-with-native-html-form-validation",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.5.l5",
                        secondLevelSubMenuTitle: "Building dynamic forms",
                        redirectTo: "building-dynamic-forms",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.5.l5.r1",
                                rightMenuTitle: "Building dynamic forms",
                                scrollToId: "building-dynamic-forms",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l5.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l5.r3",
                                rightMenuTitle: "Enable reactive forms for your project",
                                scrollToId: "enable-reactive-forms-for-your-project",
                                rightMenuSub: []
                            },
                            {
                                id: "4.5.l5.r4",
                                rightMenuTitle: "Create a form object model",
                                scrollToId: "create-a-form-object-model",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l5.r4.1",
                                        reightSubMenu: "Define control classes",
                                        scrollTo: "define-control-classes"
                                    },
                                    {
                                        id: "4.5.l5.r4.2",
                                        reightSubMenu: "Compose form groups",
                                        scrollTo: "compose-form-groups"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l5.r5",
                                rightMenuTitle: "Compose dynamic form contents",
                                scrollToId: "compose-dynamic-form-contents",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l5.r4.1",
                                        reightSubMenu: "Supply data",
                                        scrollTo: "supply-data"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l5.r6",
                                rightMenuTitle: "Create a dynamic form template",
                                scrollToId: "create-a-dynamic-form-template",
                                rightMenuSub: [
                                    {
                                        id: "4.5.l5.r6.1",
                                        reightSubMenu: "Display the form",
                                        scrollTo: "display-the-form"
                                    },
                                    {
                                        id: "4.5.l5.r6.2",
                                        reightSubMenu: "Ensuring valid data",
                                        scrollTo: "ensuring-valid-data"
                                    }
                                ]
                            },
                            {
                                id: "4.5.l5.r7",
                                rightMenuTitle: "Next steps",
                                scrollToId: "next-steps",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.6",
                firstLevelSubMenuTitle: "Http client",
                reDirectTo: "http-client",
                secondLevelSubMenu: [],
                rightMenu: [
                    {
                        id: "4.6.r1",
                        rightMenuTitle: "Communicating with backend services using HTTP",
                        scrollToId: "communicating-with-backend-services-using-http",
                        rightMenuSub: []
                    },
                    {
                        id: "4.6.r2",
                        rightMenuTitle: "Prerequisites",
                        scrollToId: "prerequisites",
                        rightMenuSub: []
                    },
                    {
                        id: "4.6.r3",
                        rightMenuTitle: "Setup for server communication",
                        scrollToId: "setup-for-server-communication",
                        rightMenuSub: []
                    },
                    {
                        id: "4.6.r4",
                        rightMenuTitle: "Requesting data from a server",
                        scrollToId: "requesting-data-from-a-server",
                        rightMenuSub: [
                            {
                                id: "4.6.r4.1",
                                reightSubMenu: "Starting the request",
                                scrollTo: "starting-the-request"
                            },
                            {
                                id: "4.6.r4.2",
                                reightSubMenu: "Requesting a typed response",
                                scrollTo: "requesting-a-typed-response"
                            },
                            {
                                id: "4.6.r4.3",
                                reightSubMenu: "Reading the full response",
                                scrollTo: "reading-the-full-response"
                            },
                            {
                                id: "4.6.r4.4",
                                reightSubMenu: "Making a JSONP request",
                                scrollTo: "making-a-jsonp-request"
                            },
                            {
                                id: "4.6.r4.5",
                                reightSubMenu: "Requesting non-JSON data",
                                scrollTo: "requesting-non-json-data"
                            }
                        ]
                    },
                    {
                        id: "4.6.r5",
                        rightMenuTitle: "Handling request errors",
                        scrollToId: "handling-request-errors",
                        rightMenuSub: [
                            {
                                id: "4.6.r5.1",
                                reightSubMenu: "Getting error details",
                                scrollTo: "getting-error-details"
                            },
                            {
                                id: "4.6.r5.2",
                                reightSubMenu: "Retrying a failed request",
                                scrollTo: "retrying-a-failed-request"
                            }
                        ]
                    },
                    {
                        id: "4.6.r6",
                        rightMenuTitle: "Sending data to a server",
                        scrollToId: "sending-data-to-a-server",
                        rightMenuSub: [
                            {
                                id: "4.6.r6.1",
                                reightSubMenu: "Making a POST request",
                                scrollTo: "making-a-post-request"
                            },
                            {
                                id: "4.6.r6.2",
                                reightSubMenu: "Making a DELETE request",
                                scrollTo: "making-a-delete-request"
                            },
                            {
                                id: "4.6.r6.3",
                                reightSubMenu: "Making a PUT request",
                                scrollTo: "making-a-put-request"
                            },
                            {
                                id: "4.6.r6.4",
                                reightSubMenu: "Adding and updating headers",
                                scrollTo: "adding-and-updating-headers"
                            }
                        ]
                    },
                    {
                        id: "4.6.r7",
                        rightMenuTitle: "Configuring HTTP URL parameters",
                        scrollToId: "configuring-http-url-parameters",
                        rightMenuSub: []
                    },
                    {
                        id: "4.6.r8",
                        rightMenuTitle: "Intercepting requests and responses",
                        scrollToId: "intercepting-requests-and-responses",
                        rightMenuSub: [
                            {
                                id: "4.6.r8.1",
                                reightSubMenu: "Write an interceptor",
                                scrollTo: "write-an-interceptor"
                            },
                            {
                                id: "4.6.r8.2",
                                reightSubMenu: "The next object",
                                scrollTo: "the-next-object"
                            },
                            {
                                id: "4.6.r8.3",
                                reightSubMenu: "Provide the interceptor",
                                scrollTo: "provide-the-interceptor"
                            },
                            {
                                id: "4.6.r8.4",
                                reightSubMenu: "Interceptor order",
                                scrollTo: "interceptor-order"
                            },
                            {
                                id: "4.6.r8.5",
                                reightSubMenu: "Handling interceptor events",
                                scrollTo: "handling-interceptor-events"
                            }
                        ]
                    },
                    {
                        id: "4.6.r9",
                        rightMenuTitle: "Http interceptor use-cases",
                        scrollToId: "http-interceptor-use-cases",
                        rightMenuSub: [
                            {
                                id: "4.6.r9.1",
                                reightSubMenu: "Setting default headers",
                                scrollTo: "setting-default-headers"
                            },
                            {
                                id: "4.6.r9.2",
                                reightSubMenu: "Logging request and response pairs",
                                scrollTo: "logging-request-and-response-pairs"
                            },
                            {
                                id: "4.6.r9.3",
                                reightSubMenu: "Custom JSON parsing",
                                scrollTo: "custom-json-parsing"
                            },
                            {
                                id: "4.6.r9.4",
                                reightSubMenu: "Caching requests",
                                scrollTo: "caching-requests"
                            },
                            {
                                id: "4.6.r9.5",
                                reightSubMenu: "Using interceptors to request multiple values",
                                scrollTo: "using-interceptors-to-request-multiple-values"
                            }
                        ]
                    },
                    {
                        id: "4.6.r10",
                        rightMenuTitle: "Tracking and showing request progress",
                        scrollToId: "tracking-and-showing-request-progress",
                        rightMenuSub: []
                    },
                    {
                        id: "4.6.r11",
                        rightMenuTitle: "Optimizing server interaction with debouncing",
                        scrollToId: "optimizing-server-interaction-with-debouncing",
                        rightMenuSub: [
                            {
                                id: "4.6.r11.1",
                                reightSubMenu: "Using the switchMap() operator",
                                scrollTo: "using-the-switchmap-operator"
                            }
                        ]
                    },
                    {
                        id: "4.6.r12",
                        rightMenuTitle: "Security: XSRF protection",
                        scrollToId: "security:-xsrf-protection",
                        rightMenuSub: [
                            {
                                id: "4.6.r12.1",
                                reightSubMenu: "Configuring custom cookie/header names",
                                scrollTo: "configuring-custom-cookie-header-names"
                            }
                        ]
                    },
                    {
                        id: "4.6.r13",
                        rightMenuTitle: "Testing HTTP requests",
                        scrollToId: "testing-http-requests",
                        rightMenuSub: [
                            {
                                id: "4.6.r13.1",
                                reightSubMenu: "Setup for testing",
                                scrollTo: "setup-for-testing"
                            },
                            {
                                id: "4.6.r13.2",
                                reightSubMenu: "Expecting and answering requests",
                                scrollTo: "expecting-and-answering-requests"
                            },
                            {
                                id: "4.6.r13.3",
                                reightSubMenu: "Testing for errors",
                                scrollTo: "testing-for-errors"
                            }
                        ]
                    },
                    {
                        id: "4.6.r14",
                        rightMenuTitle: "Passing metadata to interceptors",
                        scrollToId: "passing-metadata-to-interceptors",
                        rightMenuSub: [
                            {
                                id: "4.6.r14.1",
                                reightSubMenu: "Creating a context token",
                                scrollTo: "creating-a-context-token"
                            },
                            {
                                id: "4.6.r14.2",
                                reightSubMenu: "Setting context values when making a request",
                                scrollTo: "setting-context-values-when-making-a-request"
                            },
                            {
                                id: "4.6.r14.3",
                                reightSubMenu: "Reading context values in an interceptor",
                                scrollTo: "reading-context-values-in-an-interceptor"
                            },
                            {
                                id: "4.6.r14.4",
                                reightSubMenu: "Contexts are mutable",
                                scrollTo: "contexts-are-mutable"
                            }
                        ]
                    }
                ],
                select: false
            },
            {
                id: "4.7",
                firstLevelSubMenuTitle: "Image optimization",
                reDirectTo: "image-optimization",
                secondLevelSubMenu: [],
                rightMenu: [
                    {
                        id: "4.7.r1",
                        rightMenuTitle: "Getting started with NgOptimizedImage",
                        scrollToId: "getting-started-with-ngoptimizedimage",
                        rightMenuSub: []
                    },
                    {
                        id: "4.7.r2",
                        rightMenuTitle: "Getting Started",
                        scrollToId: "getting-started",
                        rightMenuSub: [
                            {
                                id: "4.7.r2.1",
                                reightSubMenu: "Using fill mode",
                                scrollTo: "using-fill-mode"
                            },
                            {
                                id: "4.7.r2.2",
                                reightSubMenu: "Adjusting image styling",
                                scrollTo: "adjusting-image-styling"
                            }
                        ]
                    },
                    {
                        id: "4.7.r3",
                        rightMenuTitle: "Performance Features",
                        scrollToId: "performance-features",
                        rightMenuSub: [
                            {
                                id: "4.7.r3.1",
                                reightSubMenu: "Add resource hints",
                                scrollTo: "add-resource-hints"
                            },
                            {
                                id: "4.7.r3.2",
                                reightSubMenu:
                                    "Request images at the correct size with automatic srcset",
                                scrollTo:
                                    "request-images-at-the-correct-size-with-automatic-srcset"
                            },
                            {
                                id: "4.7.r3.3",
                                reightSubMenu: "Disabling automatic srcset generation",
                                scrollTo: "disabling-automatic-srcset-generation"
                            },
                            {
                                id: "4.7.r3.4",
                                reightSubMenu: "Disabling image lazy loading",
                                scrollTo: "disabling-image-lazy-loading"
                            },
                            {
                                id: "4.7.r3.5",
                                reightSubMenu: "Advanced 'sizes' values",
                                scrollTo: "advanced-sizes-values"
                            }
                        ]
                    },
                    {
                        id: "4.7.r4",
                        rightMenuTitle: "Configuring an image loader for NgOptimizedImage",
                        scrollToId: "configuring-an-image-loader-for-ngoptimizedimage",
                        rightMenuSub: [
                            {
                                id: "4.7.r4.1",
                                reightSubMenu: "Built-in Loaders",
                                scrollTo: "built-in-loaders"
                            },
                            {
                                id: "4.7.r4.2",
                                reightSubMenu: "Custom Loaders",
                                scrollTo: "custom-loaders"
                            },
                            {
                                id: "4.7.r4.3",
                                reightSubMenu: "The loaderParams Property",
                                scrollTo: "the-loaderParams-property"
                            },
                            {
                                id: "4.7.r4.4",
                                reightSubMenu: "Example custom loader",
                                scrollTo: "example-custom-loader"
                            }
                        ]
                    }
                ],
                select: false
            },
            {
                id: "4.8",
                firstLevelSubMenuTitle: "Testing",
                reDirectTo: "testing",
                secondLevelSubMenu: [
                    {
                        id: "4.8.l1",
                        secondLevelSubMenuTitle: "Intro to testing",
                        redirectTo: "intro-to-testing",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l1.r1",
                                rightMenuTitle: "Testing",
                                scrollToId: "testing",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l1.r2",
                                rightMenuTitle: "Prerequisites",
                                scrollToId: "prerequisites",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l1.r3",
                                rightMenuTitle: "Set up testing",
                                scrollToId: "set-up-testing",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l1.r4",
                                rightMenuTitle: "Configuration",
                                scrollToId: "configuration",
                                rightMenuSub: [
                                    {
                                        id: "4.8.l1.r4.1",
                                        reightSubMenu: "Other test frameworks",
                                        scrollTo: "other-test-frameworks"
                                    },
                                    {
                                        id: "4.8.l1.r4.2",
                                        reightSubMenu: "Test file name and location",
                                        scrollTo: "test-file-name-and-location"
                                    }
                                ]
                            },
                            {
                                id: "4.8.l1.r5",
                                rightMenuTitle: "Testing in continuous integration",
                                scrollToId: "testing-in-continuous-integration",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l1.r6",
                                rightMenuTitle: "More information on testing",
                                scrollToId: "more-information-on-testing",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l2",
                        secondLevelSubMenuTitle: "Code coverage",
                        redirectTo: "code-coverage",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l2.r1",
                                rightMenuTitle: "Find out how much code you're testing",
                                scrollToId: "find-out-how-much-code-you're-testing",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l2.r2",
                                rightMenuTitle: "Code coverage enforcement",
                                scrollToId: "code-coverage-enforcement",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l3",
                        secondLevelSubMenuTitle: "Testing services",
                        redirectTo: "testing-services",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l3.r1",
                                rightMenuTitle: "Testing services",
                                scrollToId: "testing-services",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l3.r2",
                                rightMenuTitle: "Services with dependencies",
                                scrollToId: "services-with-dependencies",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l3.r3",
                                rightMenuTitle: "Testing services with the TestBed",
                                scrollToId: "testing-services-with-the-testBed",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l3.r4",
                                rightMenuTitle: "Angular TestBed",
                                scrollToId: "angular-testbed",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l3.r5",
                                rightMenuTitle: "Testing without beforeEach()",
                                scrollToId: "testing-without-beforeeach",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l3.r6",
                                rightMenuTitle: "Testing HTTP services",
                                scrollToId: "testing-http-services",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l3.r7",
                                rightMenuTitle: "HttpClientTestingModule",
                                scrollToId: "httpclienttestingmodule",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l4",
                        secondLevelSubMenuTitle: "Basics of testing components",
                        redirectTo: "basics-of-testing-components",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l4.r1",
                                rightMenuTitle: "Basics of testing components",
                                scrollToId: "basics-of-testing-components",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l4.r2",
                                rightMenuTitle: "Component class testing",
                                scrollToId: "component-class-testing",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l4.r3",
                                rightMenuTitle: "Component DOM testing",
                                scrollToId: "component-com-testing",
                                rightMenuSub: [
                                    {
                                        id: "4.8.l4.r3.1",
                                        reightSubMenu: "CLI-generated tests",
                                        scrollTo: "cli-generated-tests"
                                    },
                                    {
                                        id: "4.8.l4.r3.2",
                                        reightSubMenu: "Reduce the setup",
                                        scrollTo: "reduce-the-setup"
                                    },
                                    {
                                        id: "4.8.l4.r3.3",
                                        reightSubMenu: "createComponent()",
                                        scrollTo: "createcomponent"
                                    },
                                    {
                                        id: "4.8.l4.r3.4",
                                        reightSubMenu: "ComponentFixture",
                                        scrollTo: "componentfixture"
                                    },
                                    {
                                        id: "4.8.l4.r3.5",
                                        reightSubMenu: "beforeEach()",
                                        scrollTo: "beforeeach"
                                    },
                                    {
                                        id: "4.8.l4.r3.6",
                                        reightSubMenu: "nativeElement",
                                        scrollTo: "nativeelement"
                                    },
                                    {
                                        id: "4.8.l4.r3.7",
                                        reightSubMenu: "DebugElement",
                                        scrollTo: "Debugelement"
                                    },
                                    {
                                        id: "4.8.l4.r3.8",
                                        reightSubMenu: "By.css()",
                                        scrollTo: "by-css"
                                    }
                                ]
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l5",
                        secondLevelSubMenuTitle: "Component testing scenarios",
                        redirectTo: "component-testing-scenarios",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l5.r1",
                                rightMenuTitle: "Component testing scenarios",
                                scrollToId: "component-testing-scenarios",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r2",
                                rightMenuTitle: "Component binding",
                                scrollToId: "component-binding",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r3",
                                rightMenuTitle: "Component with external files",
                                scrollToId: "component-with-external-files",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r4",
                                rightMenuTitle: "Component with a dependency",
                                scrollToId: "component-with-a-dependency",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r5",
                                rightMenuTitle: "Component with async service",
                                scrollToId: "component-with-async-service",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r6",
                                rightMenuTitle: "Component marble tests",
                                scrollToId: "component-marble-tests",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r7",
                                rightMenuTitle: "Component with inputs and outputs",
                                scrollToId: "component-with-inputs-and-outputs",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r8",
                                rightMenuTitle: "Component inside a test host",
                                scrollToId: "component-inside-a-test-host",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r9",
                                rightMenuTitle: "Routing component",
                                scrollToId: "routing-component",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r10",
                                rightMenuTitle: "Routed component",
                                scrollToId: "routed-component",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r11",
                                rightMenuTitle: "Nested component test",
                                scrollToId: "nested-component-test",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r12",
                                rightMenuTitle: "Use a page object",
                                scrollToId: "use-a-page-object",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r13",
                                rightMenuTitle: "Calling compileComponents()",
                                scrollToId: "calling-compilecomponents",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r14",
                                rightMenuTitle: "Setup with module imports",
                                scrollToId: "setup-with-module-imports",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l5.r15",
                                rightMenuTitle: "Override component providers",
                                scrollToId: "override-component-providers",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l6",
                        secondLevelSubMenuTitle: "Testing attribute directives",
                        redirectTo: "testing-attribute-directives",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l6.r1",
                                rightMenuTitle: "Testing Attribute Directives",
                                scrollToId: "testing-attribute-directives",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l6.r2",
                                rightMenuTitle: "Testing the HighlightDirective",
                                scrollToId: "testing-the-highlightdirective",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l7",
                        secondLevelSubMenuTitle: "Testing pipes",
                        redirectTo: "testing-pipes",
                        thirdLevelSubMenu: [],
                        rightMenu: [
                            {
                                id: "4.8.l7.r1",
                                rightMenuTitle: "Testing pipes",
                                scrollToId: "testing-pipes",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l7.r2",
                                rightMenuTitle: "Testing the TitleCasePipe",
                                scrollToId: "testing-the-titlecasepipe",
                                rightMenuSub: []
                            },
                            {
                                id: "4.8.l7.r3",
                                rightMenuTitle: "Writing DOM tests to support a pipe test",
                                scrollToId: "writing-dom-tests-to-support-a-pipe-test",
                                rightMenuSub: []
                            }
                        ],
                        select: false
                    },
                    {
                        id: "4.8.l8",
                        secondLevelSubMenuTitle: "Debugging tests",
                        redirectTo: "debugging-tests",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.8.l9",
                        secondLevelSubMenuTitle: "Testing utility APIs",
                        redirectTo: "testing-utility-apis",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.9",
                firstLevelSubMenuTitle: "Internationalization",
                reDirectTo: "internationalization",
                secondLevelSubMenu: [
                    {
                        id: "4.9.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.9.l2",
                        secondLevelSubMenuTitle: "Common internationalization tasks",
                        redirectTo: "common-internationalization-tasks",
                        thirdLevelSubMenu: [
                            {
                                id: "4.9.l2.1",
                                thirdLevelSubMenuTitle: "Overview",
                                redirectTo: "overview",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.2",
                                thirdLevelSubMenuTitle: "Add the localize package",
                                redirectTo: "add-the-localizr-package",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.3",
                                thirdLevelSubMenuTitle: "Refer to locales by ID",
                                redirectTo: "refer-to-locales-by-id",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.4",
                                thirdLevelSubMenuTitle: "Format data based on locale",
                                redirectTo: "format-data-based-on-locale",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.5",
                                thirdLevelSubMenuTitle: "Prepare component for translation",
                                redirectTo: "prepare-component-for-translation",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.6",
                                thirdLevelSubMenuTitle: "Work with translation files",
                                redirectTo: "work-with-translation-files",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.7",
                                thirdLevelSubMenuTitle: "Merge translations into the app",
                                redirectTo: "merge-translations-into-the-app",
                                rightMenu: []
                            },
                            {
                                id: "4.9.l2.8",
                                thirdLevelSubMenuTitle: "Deploy multiple locales",
                                redirectTo: "deploy-multiple-locales",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.9.l3",
                        secondLevelSubMenuTitle: "Example Angular application",
                        redirectTo: "example-angular-application",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.9.l4",
                        secondLevelSubMenuTitle: "Optional internationalization practices",
                        redirectTo: "optional-internationalization-practices",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.10",
                firstLevelSubMenuTitle: "Animations",
                reDirectTo: "animations",
                secondLevelSubMenu: [
                    {
                        id: "4.10.l1",
                        secondLevelSubMenuTitle: "Introduction",
                        redirectTo: "introduction",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.10.l2",
                        secondLevelSubMenuTitle: "Transitions and triggers",
                        redirectTo: "transitions-and-triggers",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.10.l3",
                        secondLevelSubMenuTitle: "Complex sequences",
                        redirectTo: "complex-sequences",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.10.l4",
                        secondLevelSubMenuTitle: "Reusable animations",
                        redirectTo: "reusable-animations",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.10.l5",
                        secondLevelSubMenuTitle: "Route transition animations",
                        redirectTo: "route-transition-animations",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.11",
                firstLevelSubMenuTitle: "Service Workers & PWA",
                reDirectTo: "service-workers-and-pwa",
                secondLevelSubMenu: [
                    {
                        id: "4.11.l1",
                        secondLevelSubMenuTitle: "Introduction",
                        redirectTo: "introduction",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.11.l2",
                        secondLevelSubMenuTitle: "Getting started",
                        redirectTo: "getting-started",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.11.l3",
                        secondLevelSubMenuTitle: "App shell",
                        redirectTo: "app-shell",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.11.l4",
                        secondLevelSubMenuTitle: "Service worker communication",
                        redirectTo: "service-worker-communication",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.11.l5",
                        secondLevelSubMenuTitle: "Service worker notifications",
                        redirectTo: "service-worker-notifications",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.11.l6",
                        secondLevelSubMenuTitle: "Service worker in production",
                        redirectTo: "service-worker-in-production",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.11.l7",
                        secondLevelSubMenuTitle: "Service worker configuration",
                        redirectTo: "service-worker-configuration",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "4.12",
                firstLevelSubMenuTitle: "Web workers",
                reDirectTo: "web-workers",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "4.13",
                firstLevelSubMenuTitle: "Server-side rendering",
                reDirectTo: "server-side-rendering",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "4.14",
                firstLevelSubMenuTitle: "Prerendering",
                reDirectTo: "prerendering",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "4.15",
                firstLevelSubMenuTitle: "Angular Libraries",
                reDirectTo: "angular-libraries",
                secondLevelSubMenu: [
                    {
                        id: "4.15.l1",
                        secondLevelSubMenuTitle: "Libraries overview",
                        redirectTo: "libraries-overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.15.l2",
                        secondLevelSubMenuTitle: "Using published libraries",
                        redirectTo: "using-published-libraries",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.15.l3",
                        secondLevelSubMenuTitle: "Creating libraries",
                        redirectTo: "creating-libraries",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "4.15.l4",
                        secondLevelSubMenuTitle: "Angular package format",
                        redirectTo: "angular-package-format",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 5 - Best practices
    {
        id: "5",
        leftMenuTitle: "Best practices",
        redirectTo: "best-practices",
        firstLevelSubMenu: [
            {
                id: "5.1",
                firstLevelSubMenuTitle: "Security",
                reDirectTo: "security",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "5.2",
                firstLevelSubMenuTitle: "Accessibility",
                reDirectTo: "accessibility",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "5.3",
                firstLevelSubMenuTitle: "Keeping up-to-date",
                reDirectTo: "keeeping-up-to-date",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "5.4",
                firstLevelSubMenuTitle: "Property binding best practices",
                reDirectTo: "property-binding-best-practices",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "5.5",
                firstLevelSubMenuTitle: "Lazy loading feature modules",
                reDirectTo: "lazy-loading-feature-modules",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "5.6",
                firstLevelSubMenuTitle: "Lightweight injection tokens for libraries",
                reDirectTo: "lightweight-injection-tokens-for-libraries",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 6 - Angular tools
    {
        id: "6",
        leftMenuTitle: "Angular tools",
        redirectTo: "angular-tools",
        firstLevelSubMenu: [
            {
                id: "6.1",
                firstLevelSubMenuTitle: "Development wokflow",
                reDirectTo: "development-workflow",
                secondLevelSubMenu: [
                    {
                        id: "6.1.l1",
                        secondLevelSubMenuTitle: "Deploying applications",
                        redirectTo: "deploying-applications",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "6.1.l2",
                        secondLevelSubMenuTitle: "AOT compiler",
                        redirectTo: "aot-compiler",
                        thirdLevelSubMenu: [
                            {
                                id: "6.1.l2.1",
                                thirdLevelSubMenuTitle: "Ahead-Of-Time compilation",
                                redirectTo: "ahead-of-time-compilation",
                                rightMenu: []
                            },
                            {
                                id: "6.1.l2.2",
                                thirdLevelSubMenuTitle: "Angular compiler option",
                                redirectTo: "angular-compiler-option",
                                rightMenu: []
                            },
                            {
                                id: "6.1.l2.3",
                                thirdLevelSubMenuTitle: "AOT metadata errors",
                                redirectTo: "aot-metadata-errors",
                                rightMenu: []
                            },
                            {
                                id: "6.1.l2.4",
                                thirdLevelSubMenuTitle: "Template type-checking",
                                redirectTo: "template-type-checking",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "6.1.l3",
                        secondLevelSubMenuTitle: "Building & serving",
                        redirectTo: "building-and-serving",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "6.2",
                firstLevelSubMenuTitle: "CLI builders",
                reDirectTo: "cli-builders",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "6.3",
                firstLevelSubMenuTitle: "Language Service",
                reDirectTo: "language-service",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "6.4",
                firstLevelSubMenuTitle: "Dev Tools",
                reDirectTo: "dev-tools",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "6.5",
                firstLevelSubMenuTitle: "Schematics",
                reDirectTo: "schematics",
                secondLevelSubMenu: [
                    {
                        id: "6.5.l1",
                        secondLevelSubMenuTitle: "Schematics overview",
                        redirectTo: "schematics-overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "6.5.l2",
                        secondLevelSubMenuTitle: "Authoring schematics",
                        redirectTo: "authoring-schematics",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "6.5.l3",
                        secondLevelSubMenuTitle: "Schematics for libraries",
                        redirectTo: "schematics-for-libraries",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 7 - Tutorials
    {
        id: "7",
        leftMenuTitle: "Tutorials",
        redirectTo: "tutorials",
        firstLevelSubMenu: [
            {
                id: "7.1",
                firstLevelSubMenuTitle: "Tutorial: Tour of Heroes",
                reDirectTo: "tutorial-tour-of-heroes",
                secondLevelSubMenu: [
                    {
                        id: "7.1.l1",
                        secondLevelSubMenuTitle: "Introduction",
                        redirectTo: "introduction",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l2",
                        secondLevelSubMenuTitle: "Create a project",
                        redirectTo: "create-a-project",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l3",
                        secondLevelSubMenuTitle: "The hero editor",
                        redirectTo: "the-hero-editor",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l4",
                        secondLevelSubMenuTitle: "Display a list",
                        redirectTo: "display-a-list",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l5",
                        secondLevelSubMenuTitle: "Create a feature component",
                        redirectTo: "create-a-feature-component",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l6",
                        secondLevelSubMenuTitle: "Add services",
                        redirectTo: "add-services",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l7",
                        secondLevelSubMenuTitle: "Add navigation",
                        redirectTo: "add-navigation",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l8",
                        secondLevelSubMenuTitle: "Get data from a server",
                        redirectTo: "get-data-from-a-server",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "7.1.l9",
                        secondLevelSubMenuTitle: "Building a template-driven form",
                        redirectTo: "building-a-template-driven-form",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "7.2",
                firstLevelSubMenuTitle: "Building a template-driven form",
                reDirectTo: "building-a-template-driven-form",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 8 - Updates and releases
    {
        id: "8",
        leftMenuTitle: "Updates and releases",
        redirectTo: "updates-and-releases",
        firstLevelSubMenu: [
            {
                id: "8.1",
                firstLevelSubMenuTitle: "Update Angular to the latest version",
                reDirectTo: "tutorial-tour-of-heroes",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "8.2",
                firstLevelSubMenuTitle: "Roadmap",
                reDirectTo: "roadmap",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "8.3",
                firstLevelSubMenuTitle: "Release practices",
                reDirectTo: "release-practices",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "8.4",
                firstLevelSubMenuTitle: "Browser compatibility",
                reDirectTo: "browser-compatibility",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "8.5",
                firstLevelSubMenuTitle: "Browser support",
                reDirectTo: "Browser support",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "8.6",
                firstLevelSubMenuTitle: "Deprecations",
                reDirectTo: "deprecations",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "8.7",
                firstLevelSubMenuTitle: "Upgrading from AngularJS",
                reDirectTo: "upgrading-from-angularjs",
                secondLevelSubMenu: [
                    {
                        id: "8.7.l1",
                        secondLevelSubMenuTitle: "Upgrade instructions",
                        redirectTo: "upgrade-instructions",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "8.7.l2",
                        secondLevelSubMenuTitle: "Setup for upgrading from AngularJS",
                        redirectTo: "setup-for-upgrading-from-angularjs",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "8.7.l3",
                        secondLevelSubMenuTitle: "Upgrading for performance",
                        redirectTo: "upgrading-for-performance",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "8.7.l4",
                        secondLevelSubMenuTitle: "AngularJS to Angular concepts",
                        redirectTo: "angularjs-to-angular-concepts",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 9 - Reference
    {
        id: "9",
        leftMenuTitle: "Reference",
        redirectTo: "reference",
        firstLevelSubMenu: [
            {
                id: "9.1",
                firstLevelSubMenuTitle: "Coceptual reference",
                reDirectTo: "conceptual-reference",
                secondLevelSubMenu: [
                    {
                        id: "9.1.l1",
                        secondLevelSubMenuTitle: "Angular Concepts",
                        redirectTo: "angular-concepts",
                        thirdLevelSubMenu: [
                            {
                                id: "9.1.l1.1",
                                thirdLevelSubMenuTitle: "Intro to basic concepts",
                                redirectTo: "intro-to-basic-concepts",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l1.2",
                                thirdLevelSubMenuTitle: "Intro to modules",
                                redirectTo: "intro-to-modules",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l1.3",
                                thirdLevelSubMenuTitle: "Intro to components",
                                redirectTo: "intro-to-components",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l1.4",
                                thirdLevelSubMenuTitle: "Next steps",
                                redirectTo: "next-steps",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l1.5",
                                thirdLevelSubMenuTitle: "Binding syntax",
                                redirectTo: "binding-syntax",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l1.6",
                                thirdLevelSubMenuTitle: "How event binding works",
                                redirectTo: "how-event-binding-works",
                                rightMenu: []
                            },
                            {
                                id: "6.1.l2.7",
                                thirdLevelSubMenuTitle: "Template variables",
                                redirectTo: "template variables",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.1.l2",
                        secondLevelSubMenuTitle: "Workspace and project structure",
                        redirectTo: "workspace-and-project-structure",
                        thirdLevelSubMenu: [
                            {
                                id: "9.1.l2.1",
                                thirdLevelSubMenuTitle: "Project file structure",
                                redirectTo: "project-file-structure",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l2.2",
                                thirdLevelSubMenuTitle: "Workspace configuration",
                                redirectTo: "workspace-configuration",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l2.3",
                                thirdLevelSubMenuTitle: "npm dependencies",
                                redirectTo: "npm-dependencies",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l2.4",
                                thirdLevelSubMenuTitle: "Typescript configuration",
                                redirectTo: "typescript-configuration",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.1.l3",
                        secondLevelSubMenuTitle: "NgModules",
                        redirectTo: "ngmodules",
                        thirdLevelSubMenu: [
                            {
                                id: "9.1.l3.1",
                                thirdLevelSubMenuTitle: "NgModules introduction",
                                redirectTo: "ngModules-introduction",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.2",
                                thirdLevelSubMenuTitle: "JS Modules VS NgModules",
                                redirectTo: "jsmodules-vs-ngmodules",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.3",
                                thirdLevelSubMenuTitle: "Launching apps with root module",
                                redirectTo: "launcing-apps-with-root-module",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.4",
                                thirdLevelSubMenuTitle: "Frequently used NgModules",
                                redirectTo: "frequently-used-ngmodules",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.5",
                                thirdLevelSubMenuTitle: "Types of feature modules",
                                redirectTo: "types-of-feature-modules",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.6",
                                thirdLevelSubMenuTitle: "Entry components",
                                redirectTo: "entry-components",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.7",
                                thirdLevelSubMenuTitle: "Feature modules",
                                redirectTo: "feature-modules",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.8",
                                thirdLevelSubMenuTitle: "Providing dependencies",
                                redirectTo: "providing-dependencies",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.9",
                                thirdLevelSubMenuTitle: "Singleton services",
                                redirectTo: "singleton-services",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.10",
                                thirdLevelSubMenuTitle: "Sharing NgModules",
                                redirectTo: "sharing-ngmodules",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.11",
                                thirdLevelSubMenuTitle: "NgModules API",
                                redirectTo: "ngmodules-api",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l3.12",
                                thirdLevelSubMenuTitle: "NgModules FAQs",
                                redirectTo: "ngmodules-faqs",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.1.l4",
                        secondLevelSubMenuTitle: "Observables & RxJS",
                        redirectTo: "observables-and-rxjs",
                        thirdLevelSubMenu: [
                            {
                                id: "9.1.l4.1",
                                thirdLevelSubMenuTitle: "Observables overview",
                                redirectTo: "observables-overview",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l4.2",
                                thirdLevelSubMenuTitle: "The RXJS library",
                                redirectTo: "the-rxjs-library",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l4.3",
                                thirdLevelSubMenuTitle: "Observable in Angular",
                                redirectTo: "observable-in-angular",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l4.4",
                                thirdLevelSubMenuTitle: "Practical usage",
                                redirectTo: "practical-usage",
                                rightMenu: []
                            },
                            {
                                id: "9.1.l4.5",
                                thirdLevelSubMenuTitle: "Compare to other techniques",
                                redirectTo: "compare-to-other-techniques",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.1.l5",
                        secondLevelSubMenuTitle: "Dependency Injection",
                        redirectTo: "dependency-injection",
                        thirdLevelSubMenu: [
                            {
                                id: "9.1.l5.1",
                                thirdLevelSubMenuTitle: "DI in action",
                                redirectTo: "di-in-action",
                                rightMenu: []
                            }
                        ],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "9.2",
                firstLevelSubMenuTitle: "CLI command reference",
                reDirectTo: "cli-command-reference",
                secondLevelSubMenu: [
                    {
                        id: "9.2.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l2",
                        secondLevelSubMenuTitle: "ng add",
                        redirectTo: "ng-add",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l3",
                        secondLevelSubMenuTitle: "ng analytics",
                        redirectTo: "ng-analytics",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l4",
                        secondLevelSubMenuTitle: "ng build",
                        redirectTo: "ng-build",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l5",
                        secondLevelSubMenuTitle: "ng cache",
                        redirectTo: "ng-cache",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l6",
                        secondLevelSubMenuTitle: "ng completion",
                        redirectTo: "ng-completion",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l7",
                        secondLevelSubMenuTitle: "ng config",
                        redirectTo: "ng-config",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l8",
                        secondLevelSubMenuTitle: "ng deploy",
                        redirectTo: "ng-deploy",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l9",
                        secondLevelSubMenuTitle: "ng doc",
                        redirectTo: "ng-doc",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l10",
                        secondLevelSubMenuTitle: "ng e2e",
                        redirectTo: "ng-e2e",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l11",
                        secondLevelSubMenuTitle: "ng extract-i18n",
                        redirectTo: "ng-extract-i18n",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l12",
                        secondLevelSubMenuTitle: "ng generate",
                        redirectTo: "ng-generate",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l13",
                        secondLevelSubMenuTitle: "ng lint",
                        redirectTo: "ng-lint",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l14",
                        secondLevelSubMenuTitle: "ng new",
                        redirectTo: "ng-new",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l15",
                        secondLevelSubMenuTitle: "ng run",
                        redirectTo: "ng-run",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l16",
                        secondLevelSubMenuTitle: "ng serve",
                        redirectTo: "ng-serve",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l17",
                        secondLevelSubMenuTitle: "ng test",
                        redirectTo: "ng-test",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l18",
                        secondLevelSubMenuTitle: "ng update",
                        redirectTo: "ng-update",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.2.l19",
                        secondLevelSubMenuTitle: "ng version",
                        redirectTo: "ng-version",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "9.3",
                firstLevelSubMenuTitle: "API reference",
                reDirectTo: "api-reference",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "9.4",
                firstLevelSubMenuTitle: "Error reference",
                reDirectTo: "error-reference",
                secondLevelSubMenu: [
                    {
                        id: "9.4.l1",
                        secondLevelSubMenuTitle: "NG0100: Expression Changed After Checked",
                        redirectTo: "NG0100",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l2",
                        secondLevelSubMenuTitle:
                            "NG01101: Erong Async validator Return Type",
                        redirectTo: "NG01101",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l3",
                        secondLevelSubMenuTitle: "NG01203: Missing value accessor",
                        redirectTo: "NG01203",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l4",
                        secondLevelSubMenuTitle: "NG0200: Circular dependency in DI",
                        redirectTo: "NG0200",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l5",
                        secondLevelSubMenuTitle: "NG0201: No provider found",
                        redirectTo: "NG0201",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l6",
                        secondLevelSubMenuTitle:
                            "NG0203: `inject()` must be called from an injection context",
                        redirectTo: "NG0203",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l7",
                        secondLevelSubMenuTitle: "NG0209: Invalid multi provider",
                        redirectTo: "NG0209",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l8",
                        secondLevelSubMenuTitle: "NG02200: Missing iterable differ",
                        redirectTo: "NG02200",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l9",
                        secondLevelSubMenuTitle: "NG0300: Selector collision",
                        redirectTo: "NG0300",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l10",
                        secondLevelSubMenuTitle: "NG0301: Export not found",
                        redirectTo: "NG0301",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l11",
                        secondLevelSubMenuTitle: "NG0302: Pipe not found",
                        redirectTo: "NG0302",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l12",
                        secondLevelSubMenuTitle:
                            "NG0403: Bootstraped NgModule doesn't specify which component to initialize",
                        redirectTo: "NG0403",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l13",
                        secondLevelSubMenuTitle:
                            "NG0910: Unsafe bindings on an iframe element",
                        redirectTo: "NG0910",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l14",
                        secondLevelSubMenuTitle: "NG1001: Argument not literal",
                        redirectTo: "NG1001",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l15",
                        secondLevelSubMenuTitle: "NG2003: Missing Token",
                        redirectTo: "NG2003",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l16",
                        secondLevelSubMenuTitle: "NG2009: Invalid shadow DOM selector",
                        redirectTo: "NG2009",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l17",
                        secondLevelSubMenuTitle: "NG3003: Import cycle detected",
                        redirectTo: "NG3003",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l18",
                        secondLevelSubMenuTitle:
                            "NG6100: NgModule.id to module.id anti-pattern",
                        redirectTo: "NG6100",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l19",
                        secondLevelSubMenuTitle: "NG6999: Invalid metadata",
                        redirectTo: "NG6999",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l20",
                        secondLevelSubMenuTitle: "NG8001: Invalid element",
                        redirectTo: "NG8001",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l21",
                        secondLevelSubMenuTitle: "NG8002: Invalid attribute",
                        redirectTo: "NG8002",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.4.l22",
                        secondLevelSubMenuTitle: "NG8003: Missing reference target",
                        redirectTo: "NG8003",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "9.5",
                firstLevelSubMenuTitle: "Extended diagnostic reference",
                reDirectTo: "extended-diagnostic-reference",
                secondLevelSubMenu: [
                    {
                        id: "9.5.l1",
                        secondLevelSubMenuTitle: "Extended Diagnostics Overview",
                        redirectTo: "extended-diagnostics-overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l2",
                        secondLevelSubMenuTitle: "NG8101: Invalid Banana-in-Box",
                        redirectTo: "NG8101",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l3",
                        secondLevelSubMenuTitle: "NG8102: Nullish coalescing not nullable",
                        redirectTo: "NG8102",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l4",
                        secondLevelSubMenuTitle: "NG8103: Missing control flow directive",
                        redirectTo: "NG8103",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l5",
                        secondLevelSubMenuTitle: "NG8104: Text attribute not binding",
                        redirectTo: "NG8104",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l6",
                        secondLevelSubMenuTitle:
                            "NG8105: Missing `let` keyword in an *ngFor expression",
                        redirectTo: "NG8105",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l7",
                        secondLevelSubMenuTitle: "NG8106: Suffix not supported",
                        redirectTo: "NG8106",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.5.l8",
                        secondLevelSubMenuTitle: "NG8107: Optional chain not nullable",
                        redirectTo: "NG8107",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "9.6",
                firstLevelSubMenuTitle: "Example applications",
                reDirectTo: "example-applications",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "9.7",
                firstLevelSubMenuTitle: "Angular glossary",
                reDirectTo: "angular-glossary",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "9.8",
                firstLevelSubMenuTitle: "Angular coding style",
                reDirectTo: "angular-coding-style",
                secondLevelSubMenu: [
                    {
                        id: "9.8.l1",
                        secondLevelSubMenuTitle: "Quick Reference",
                        redirectTo: "quick-reference",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "9.8.l2",
                        secondLevelSubMenuTitle: "Coding Style Guide",
                        redirectTo: "coding-style-guide",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 10 - Documentation contributors guide
    {
        id: "10",
        leftMenuTitle: "Documentation contributors guide",
        redirectTo: "documentation-contributors-guide",
        firstLevelSubMenu: [
            {
                id: "10.1",
                firstLevelSubMenuTitle: "Overview",
                reDirectTo: "overview",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "10.2",
                firstLevelSubMenuTitle: "Common documentation maintenance tasks",
                reDirectTo: "common-documentation-maintenance-tasks",
                secondLevelSubMenu: [
                    {
                        id: "10.2.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.2.l2",
                        secondLevelSubMenuTitle: "Review documentation",
                        redirectTo: "review-documentation",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.2.l3",
                        secondLevelSubMenuTitle: "Update Search Keyword",
                        redirectTo: "update-search-keyword",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "10.3",
                firstLevelSubMenuTitle: "Documentation editing workflow",
                reDirectTo: "documentation-editing-workflow",
                secondLevelSubMenu: [
                    {
                        id: "10.3.l1",
                        secondLevelSubMenuTitle: "Overview",
                        redirectTo: "overview",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l2",
                        secondLevelSubMenuTitle: "Prepare to edit documentation",
                        redirectTo: "prepare-to-edit-documentation",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l3",
                        secondLevelSubMenuTitle: "Select a documentation issue",
                        redirectTo: "select-a-documentation-issue",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l4",
                        secondLevelSubMenuTitle: "Start to edit a documentation topic",
                        redirectTo: "start-to-edit-a-documentation-topic",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l5",
                        secondLevelSubMenuTitle:
                            "Make and save changes to a documentation topic",
                        redirectTo: "make-and-save-changes-to-a-documentation-topic",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l6",
                        secondLevelSubMenuTitle: "Resolve documentation linter messages",
                        redirectTo: "resolve-documentation-linter-messages",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l7",
                        secondLevelSubMenuTitle: "Build and test a documentation",
                        redirectTo: "build-and-test-a-documentation",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l8",
                        secondLevelSubMenuTitle:
                            "Prepare a documentation for a pull request",
                        redirectTo: "prepare-a-documentation-for-a-pull-request",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l9",
                        secondLevelSubMenuTitle: "Open a documentation pull request",
                        redirectTo: "open-a-documentation-pull-request",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l10",
                        secondLevelSubMenuTitle: "Update a documentation pull request",
                        redirectTo: "update-a-documentation-pull-request",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    },
                    {
                        id: "10.3.l11",
                        secondLevelSubMenuTitle: "Finish up a documentation pull request",
                        redirectTo: "finish-up-a-documentation-pull-request",
                        thirdLevelSubMenu: [],
                        rightMenu: [],
                        select: false
                    }
                ],
                rightMenu: [],
                select: false
            },
            {
                id: "10.4",
                firstLevelSubMenuTitle: "Documentation style guide",
                reDirectTo: "documentation-style-guide",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "10.5",
                firstLevelSubMenuTitle: "Angular docs localization guidelines",
                reDirectTo: "angular-docs-localization-guidelines",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    },
    // 11 - Docs Version
    {
        id: "11",
        leftMenuTitle: "Docs Version",
        redirectTo: "docs-version",
        firstLevelSubMenu: [
            {
                id: "11.1",
                firstLevelSubMenuTitle: "next",
                reDirectTo: "next",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.2",
                firstLevelSubMenuTitle: "rc",
                reDirectTo: "rc",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.3",
                firstLevelSubMenuTitle: "stable",
                reDirectTo: "stable",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.4",
                firstLevelSubMenuTitle: "v14",
                reDirectTo: "v14",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.5",
                firstLevelSubMenuTitle: "v13",
                reDirectTo: "v13",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.6",
                firstLevelSubMenuTitle: "v12",
                reDirectTo: "v12",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.7",
                firstLevelSubMenuTitle: "v11",
                reDirectTo: "v11",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.8",
                firstLevelSubMenuTitle: "v10",
                reDirectTo: "v10",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.9",
                firstLevelSubMenuTitle: "v9",
                reDirectTo: "v9",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.10",
                firstLevelSubMenuTitle: "v8",
                reDirectTo: "v8",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.11",
                firstLevelSubMenuTitle: "v7",
                reDirectTo: "v7",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.12",
                firstLevelSubMenuTitle: "v6",
                reDirectTo: "v6",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.13",
                firstLevelSubMenuTitle: "v5",
                reDirectTo: "v5",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.14",
                firstLevelSubMenuTitle: "v4",
                reDirectTo: "v4",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            },
            {
                id: "11.15",
                firstLevelSubMenuTitle: "v2",
                reDirectTo: "v2",
                secondLevelSubMenu: [],
                rightMenu: [],
                select: false
            }
        ],
        select: false
    }

];
