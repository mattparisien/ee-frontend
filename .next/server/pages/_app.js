(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4183:
/***/ ((module) => {

// Exports
module.exports = {
	"SocialListWrapper": "DropdownMenu_SocialListWrapper__744cb",
	"DropdownLink": "DropdownMenu_DropdownLink__Jywsj",
	"DropdownMenuList": "DropdownMenu_DropdownMenuList__mc_vH"
};


/***/ }),

/***/ 3052:
/***/ ((module) => {

// Exports
module.exports = {
	"isBurger": "Burger_isBurger__qfw7b",
	"isClose": "Burger_isClose__Rqzyt"
};


/***/ }),

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: "The Eyes and Ears Agency",
    description: "The Eyes and Ears Agency creates sustained positive change by building a bridge between the music industry and impactful nonprofit organizations.",
    canonical: "https://www.eyesandearsagency.com/",
    openGraph: {
        type: "website",
        locale: "en_CA",
        url: "https://www.eyesandearsagency.com/",
        site_name: "The Eyes and Ears Agency"
    },
    twitter: {
        handle: null,
        site: "https://www.eyesandearsagency.com/",
        cardType: "summary"
    },
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/eyes-and-ears-favicon.png"
        }
    ],
    additionalMetaTags: [
        {
            property: "keywords",
            content: "Social Impact, Agency, Music Industry, Cause Based, Partnerships, Social Change, Environmental Change"
        }, 
    ]
});


/***/ }),

/***/ 8584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ introAnimation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


const introAnimation = (onCompleteCb)=>{
    const timeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
    const headerLogo = document.querySelector(".HeaderLogo");
    const characters = jquery__WEBPACK_IMPORTED_MODULE_1___default()(headerLogo).find(".chars path");
    const subtitle = jquery__WEBPACK_IMPORTED_MODULE_1___default()(headerLogo).find(".the");
    const subtitle2 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(headerLogo).find(".agency");
    const subtitles = [
        ...subtitle,
        ...subtitle2
    ];
    const card = document.querySelector(".IntroCard");
    const windowHeight = window.innerHeight;
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(headerLogo, {
        y: windowHeight / 2,
        scale: 2
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(subtitles, {
        opacity: 0
    });
    timeline.from(characters, {
        y: "-100px",
        stagger: 0.08,
        ease: "expo.inOut",
        duration: 2.6
    }).to(headerLogo, {
        opacity: 1
    }, 0.1).to(headerLogo, {
        y: "0%",
        scale: 1,
        duration: 2,
        ease: "expo.inOut"
    }, 2.4).to(card, {
        opacity: 0,
        duration: 1
    }).to(subtitles, {
        opacity: 1,
        duration: 1,
        onComplete: ()=>{
            setTimeout(()=>{
                onCompleteCb();
            }, 400);
        }
    }, 2);
};



/***/ }),

/***/ 8386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DropdownMenu_DropdownMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/helpers/hooks/useResize.js

function useResize() {
    const { 0: windowWidth , 1: setWindowWidth  } = (0,external_react_.useState)(null);
    const { 0: isResized , 1: setResized  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleResize = function(e) {
            const innerWidth = window.innerWidth;
            setWindowWidth(innerWidth);
            setResized(true);
        };
        if (window !== "undefined") {
            window.addEventListener("resize", handleResize);
        }
        return ()=>{
            window.removeEventListener("resize", handleResize);
            setResized(false);
        };
    }, []);
    return [
        windowWidth,
        isResized
    ];
};

// EXTERNAL MODULE: ./src/lib/context.js
var context = __webpack_require__(6857);
// EXTERNAL MODULE: ./src/components/Containers/ContainerFluid.js
var ContainerFluid = __webpack_require__(5447);
// EXTERNAL MODULE: ./src/components/Lists/SocialList.js + 6 modules
var SocialList = __webpack_require__(1253);
// EXTERNAL MODULE: ./src/components/Paragraph/Paragraph.js
var Paragraph = __webpack_require__(7305);
// EXTERNAL MODULE: ./src/components/DropdownMenu/DropdownMenu.module.css
var DropdownMenu_module = __webpack_require__(4183);
var DropdownMenu_module_default = /*#__PURE__*/__webpack_require__.n(DropdownMenu_module);
;// CONCATENATED MODULE: ./src/components/DropdownMenu/DropdownMenuInfo.js





function DropdownMenuInfo({ dropdownActive  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "DropdownMenuInfo absolute bottom-0 right-0 flex items-end justify-between w-full p-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph/* default */.Z, {
                size: "small",
                disableMargin: true,
                wrapperClasses: `text-light transition-[transform,opacity] ${dropdownActive ? "opacity-100 translate-y-0 ease-[cubic-bezier(.215,.61,.355,1)] duration-[600ms] delay-[600ms]" : "opacity-0 -translate-y-full"} `,
                children: "Social Impact Agency"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${dropdownActive ? (DropdownMenu_module_default()).SocialListWrapper + ` translate-y-0 opacity-100` : "translate-y-full opacity-0"} `,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SocialList/* default */.Z, {
                    color: "light"
                })
            })
        ]
    });
}
/* harmony default export */ const DropdownMenu_DropdownMenuInfo = (DropdownMenuInfo);

// EXTERNAL MODULE: ./src/components/Heading/Heading.js
var Heading = __webpack_require__(3720);
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__(514);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: ./src/components/DropdownMenu/DropdownMenuList.js






function DropdownMenuList({ navItems , toggleMenu , menuActive  }) {
    const linkClasses = external_classnames_default()(`${(DropdownMenu_module_default()).DropdownLink} block hover:text-yellow-custom`, {
        "opacity-0 translate-y-full": !menuActive,
        "opacity-100 translate-y-0": menuActive
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: `${menuActive ? (DropdownMenu_module_default()).DropdownMenuList : ""} z-50 sticky w-full  flex flex-col items-center justify-center text-center`,
        children: navItems && navItems.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: i !== navItems.length - 1 ? "pb-5" : "",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Heading/* default */.Z, {
                    level: 1,
                    wrapperClasses: "text-light transition color duration-400 ease",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                        href: item.Slug,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            onClick: toggleMenu,
                            className: linkClasses,
                            children: item.Name
                        })
                    })
                })
            }, i)
        )
    });
}
/* harmony default export */ const DropdownMenu_DropdownMenuList = (DropdownMenuList);

;// CONCATENATED MODULE: ./src/components/DropdownMenu/DropdownMenu.js









function DropdownMenu() {
    const { appState , setAppState , toggleDropdown  } = (0,external_react_.useContext)(context/* GlobalContext */.k);
    const dropdownActive = appState.dropdownActive;
    const classes = external_classnames_default()("DropdownMenu fixed top-0 left-0 w-full h-[60vh] before:bg-dark before:w-full before:h-full before:absolute before:top-0 before:left-0 before:origin-top before:transition before:duration-[0.6s] before:ease-dropdown", {
        "is-active": dropdownActive,
        invisible: !dropdownActive,
        visible: dropdownActive,
        "before:scale-y-1": dropdownActive,
        "before:scale-y-0": !dropdownActive
    });
    const theme = (0,material_.useTheme)();
    const [windowWidth] = useResize();
    (0,external_react_.useEffect)(()=>{
        if (theme) {
            const breakpoint = "769";
            windowWidth > breakpoint && dropdownActive && toggleDropdown();
        }
    }, [
        theme,
        windowWidth
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes,
        style: {
            zIndex: 9999,
            transition: "visibility 0.8s"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerFluid/* default */.Z, {
            classes: "flex items-center justify-center h-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenu_DropdownMenuList, {
                    navItems: appState.navigation,
                    toggleMenu: toggleDropdown,
                    menuActive: dropdownActive
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenu_DropdownMenuInfo, {
                    dropdownActive: dropdownActive
                })
            ]
        })
    });
}
/* harmony default export */ const DropdownMenu_DropdownMenu = (DropdownMenu);


/***/ }),

/***/ 2505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6857);
/* harmony import */ var _lib_getFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9736);
/* harmony import */ var _Containers_ContainerFluid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5447);
/* harmony import */ var _FooterBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2212);
/* harmony import */ var _FooterCenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FooterCenter__WEBPACK_IMPORTED_MODULE_6__]);
_FooterCenter__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Footer(props) {
    const { appState , setAppState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__/* .GlobalContext */ .k);
    const footer = appState.footer;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_lib_getFooter__WEBPACK_IMPORTED_MODULE_3__/* .getFooter */ .P)(setAppState);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "Footer h-[600px] w-screen bg-dark text-light",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers_ContainerFluid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            classes: "h-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content-wrapper h-full flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "spacer h-28"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FooterCenter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        heading: footer.Heading,
                        email: footer.Email
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FooterBottom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3720);
/* harmony import */ var _Lists_SocialList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1253);




function FooterBottom() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "FooterBottom pt-4 pb-4 flex justify-between items-end md:items-center h-28",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                level: 5,
                children: "The Eyes & Ears Agency"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Lists_SocialList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                color: "light"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBottom);


/***/ }),

/***/ 9685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3720);
/* harmony import */ var _FooterLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5707);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FooterLogo__WEBPACK_IMPORTED_MODULE_3__]);
_FooterLogo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function FooterCenter({ heading , email  }) {
    const matches = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)("(max-width: 769px)");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "FooterCenter flex flex-col md:flex-row items-center justify-between w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        level: 1,
                        wrapperClasses: "text-center md:text-left",
                        children: heading
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "email md:text-xl text-center md:text-left mt-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: `mailto:${email}`,
                            children: email
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FooterLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterCenter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_Scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4429);
/* harmony import */ var _Vector_Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HOC_Scale__WEBPACK_IMPORTED_MODULE_2__, _Vector_Svg__WEBPACK_IMPORTED_MODULE_3__]);
([_HOC_Scale__WEBPACK_IMPORTED_MODULE_2__, _Vector_Svg__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function FooterLogo() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "FooterLogo w-28 overflow-visible mt-12 md:w-44 md:mt-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_Scale__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vector_Svg__WEBPACK_IMPORTED_MODULE_3__/* .DrawnLogo */ .$7, {
                color: "light"
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterLogo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6857);
/* harmony import */ var _Burger_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3052);
/* harmony import */ var _Burger_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Burger_module_css__WEBPACK_IMPORTED_MODULE_4__);





function Burger({ dropdownActive , isIntroComplete  }) {
    const { toggleDropdown  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_3__/* .GlobalContext */ .k);
    const pseudoClasses = {
        common: "after:absolute before:absolute after:top-1/2 after:left-1/2 after:w-[30px] after:h-[2px] before:top-1/2 before:left-1/2 before:w-[30px] before:h-[2px] before:transition before:duration-[300ms] before:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] after:transition after:duration-[300ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)]"
    };
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`Burger ${dropdownActive ? (_Burger_module_css__WEBPACK_IMPORTED_MODULE_4___default().isClose) : (_Burger_module_css__WEBPACK_IMPORTED_MODULE_4___default().isBurger)} relative block h-7 w-16 rounded-3xl md:hidden ${pseudoClasses.common} transition duration-[700ms] ease-[cubic-bezier(.215,.61,.355,1)]`, {
        "is-close bg-light before:bg-dark after:bg-dark": dropdownActive,
        "is-burger bg-dark before:bg-light after:bg-light": !dropdownActive,
        "before:-translate-y-1/2 after:-translate-y-1/2 before:-translate-x-1/2 after:-translate-x-1/2": dropdownActive,
        "before:rotate-[20deg] after:-rotate-[20deg]": dropdownActive,
        "-translate-y-full opacity-0": !isIntroComplete
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classes,
        onClick: toggleDropdown,
        "data-testid": "menuBtn"
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);


/***/ }),

/***/ 3816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6857);
/* harmony import */ var _ResponsiveAppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ResponsiveAppBar__WEBPACK_IMPORTED_MODULE_3__]);
_ResponsiveAppBar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Header({ toggleTransitioning , color  }) {
    const { appState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_2__/* .GlobalContext */ .k);
    const dropdownActive = appState.dropdownActive;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `Header fixed top-0 left-0 w-screen h-13 ${dropdownActive ? "bg-transparent" : "bg-light"}`,
        style: {
            zIndex: 99999
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResponsiveAppBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            toggleTransitioning: toggleTransitioning,
            dropdownActive: dropdownActive,
            color: color
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Vector_Svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2103);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Vector_Svg__WEBPACK_IMPORTED_MODULE_2__]);
_Vector_Svg__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function HeaderLogo({ dropdownActive  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "HeaderLogo w-[150px] opacity-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Vector_Svg__WEBPACK_IMPORTED_MODULE_2__/* .TextLogo */ .yP, {
                    className: `transition-[fill] duration-200 ease ${dropdownActive ? "fill-light" : "fill-dark"}`
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLogo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function NavDesktop({ navItems , isIntroComplete  }) {
    const linkClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()("transition duration-[800ms] ease-[cubic-bezier(.215,.61,.355,1)] cursor-pointer", {
        "opacity-0 translate-y-full": !isIntroComplete
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "NavDesktop hidden md:block",
        "data-testid": "navDesktop",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "flex",
            children: navItems && navItems.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `listItem_${i + 1} flex items-end ${i !== navItems.length - 1 ? "pr-10" : ""} w-auto opacity-60 transition-opacity ease duration-300 hover:opacity-100 font-semibold`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: item.Slug,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: item.slug,
                            className: linkClasses,
                            style: {
                                transitionDelay: `${i}00ms`
                            },
                            children: item.Name
                        })
                    })
                }, i)
            )
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavDesktop);


/***/ }),

/***/ 1239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6857);
/* harmony import */ var _Containers_ContainerFluid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5447);
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7813);
/* harmony import */ var _HeaderLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8774);
/* harmony import */ var _NavDesktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3046);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeaderLogo__WEBPACK_IMPORTED_MODULE_6__]);
_HeaderLogo__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ResponsiveAppBar({ dropdownActive , onBurgerClick  }) {
    const { appState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_3__/* .GlobalContext */ .k);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers_ContainerFluid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "header-content flex items-center justify-between py-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "header-spacer w-20 md:w-[195px]"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderLogo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    dropdownActive: dropdownActive
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavDesktop__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    navItems: appState.navigation[0] && appState.navigation,
                    isIntroComplete: appState.isIntroComplete
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Burger__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    onBurgerClick: onBurgerClick,
                    dropdownActive: dropdownActive,
                    isIntroComplete: appState.isIntroComplete
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveAppBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6857);
/* harmony import */ var _DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8386);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2505);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3816);
/* harmony import */ var _Transition_RouteTransition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__, _Header_Header__WEBPACK_IMPORTED_MODULE_7__, _Transition_RouteTransition__WEBPACK_IMPORTED_MODULE_8__]);
([_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__, _Header_Header__WEBPACK_IMPORTED_MODULE_7__, _Transition_RouteTransition__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Layout({ children  }) {
    const { appState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_4__/* .GlobalContext */ .k);
    const dropdownActive = appState.dropdownActive;
    const fadeClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()("FadeWrapper transition transition-opacity ease duration-300 delay-100", {
        "opacity-0": dropdownActive
    });
    const layoutClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()("Layout after:fixed after:top-0 after:left-0 after:w-full after:h-full after:z-50 after:bg-light after:transition after:duration-[500ms] after:ease-[cubic-bezier(.645,.045,.355,1)] after:origin-top bg-yellow-custom", {
        "after:scale-y-0": appState.isIntroComplete
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "scroll-wrapper",
        "data-scroll-container": true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: layoutClasses,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownMenu_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: fadeClasses,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: "main pt-[69px] bg-light",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Transition_RouteTransition__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                children: children
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Lists_SocialList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/lib/context.js
var context = __webpack_require__(6857);
;// CONCATENATED MODULE: external "@mui/icons-material/Facebook"
const Facebook_namespaceObject = require("@mui/icons-material/Facebook");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Instagram"
const Instagram_namespaceObject = require("@mui/icons-material/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LinkedIn"
const LinkedIn_namespaceObject = require("@mui/icons-material/LinkedIn");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Pinterest"
const Pinterest_namespaceObject = require("@mui/icons-material/Pinterest");
var Pinterest_default = /*#__PURE__*/__webpack_require__.n(Pinterest_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Twitter"
const Twitter_namespaceObject = require("@mui/icons-material/Twitter");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/YouTube"
const YouTube_namespaceObject = require("@mui/icons-material/YouTube");
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_namespaceObject);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/Lists/SocialList.js










const iconMap = {
    instagram: (Instagram_default()),
    linkedin: (LinkedIn_default()),
    facebook: (Facebook_default()),
    twitter: (Twitter_default()),
    youtube: (YouTube_default()),
    pinterest: (Pinterest_default())
};
function SocialList({ direction  }) {
    const { appState  } = (0,external_react_.useContext)(context/* GlobalContext */.k);
    const classes = external_classnames_default()("SocialList flex ", {
        "flex-col md:flex-row": !direction || direction === "row",
        "flex-col": direction === "col"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: classes,
        children: appState && appState.socials.map((account, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: account.Url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "p-0 hover:opacity-50 transition transition-ease duration-300",
                    children: /*#__PURE__*/ external_react_default().createElement(iconMap[account.Name.toLowerCase()], {
                        className: `text-light ${i !== 0 && "mt-3 md:ml-3 md:mt-0"}`
                    })
                })
            }, i)
        )
    });
}
/* harmony default export */ const Lists_SocialList = (SocialList);


/***/ }),

/***/ 5795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function RouteTransition({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.5
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
        exitBeforeEnter: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: "RouteTransition",
            variants: variants,
            animate: "visible",
            exit: "exit",
            children: children
        }, router.pathname)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RouteTransition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ defaultState)
/* harmony export */ });
const defaultState = {
    isIntroComplete: false,
    navigation: [],
    socials: [],
    dropdownActive: false,
    projects: [],
    home: {},
    about: {},
    singleProject: {},
    footer: {}
};


/***/ }),

/***/ 9736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getFooter)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getFooter(setState) {
    try {
        const config = {
            params: {
                fields: "Heading, Email"
            }
        };
        const footerText = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://glacial-river-52194.herokuapp.com/api"}/footer`, config);
        setState((prev)=>({
                ...prev,
                footer: {
                    ...footerText.data.data.attributes
                }
            })
        );
    } catch (err) {
        console.log(err);
    }
}


/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getNavigation)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getNavigation(setState) {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://glacial-river-52194.herokuapp.com/api"}/pages?fields=Name,Slug&filters=[Active][$eq]=true&sort[0]=id%3Aasc`);
        setState((state)=>({
                ...state,
                navigation: [
                    ...response.data.data.map((x)=>({
                            ...x.attributes
                        })
                    )
                ]
            })
        );
    } catch (err) {
        console.log(err);
    }
}


/***/ }),

/***/ 7726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getSocials)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function getSocials(setState) {
    try {
        const config = {
            params: {
                fields: "Name, Url"
            }
        };
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://glacial-river-52194.herokuapp.com/api"}/socials`, config);
        setState((state)=>({
                ...state,
                socials: [
                    ...response.data.data.map((x)=>({
                            ...x.attributes
                        })
                    )
                ]
            })
        );
    } catch (err) {
        console.log(err);
    }
}


/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1290);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6857);
/* harmony import */ var _lib_defaultState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9359);
/* harmony import */ var _lib_getNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1539);
/* harmony import */ var _lib_getSocials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7726);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8584);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(666);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function MyApp({ Component , pageProps  }) {
    const { 0: appState , 1: setAppState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_lib_defaultState__WEBPACK_IMPORTED_MODULE_4__/* .defaultState */ .W);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_animations__WEBPACK_IMPORTED_MODULE_7__/* .introAnimation */ .z)(setIntroComplete);
        (0,_lib_getNavigation__WEBPACK_IMPORTED_MODULE_5__/* .getNavigation */ .T)(setAppState);
        (0,_lib_getSocials__WEBPACK_IMPORTED_MODULE_6__/* .getSocials */ .n)(setAppState);
    }, []);
    const toggleDropdown = ()=>{
        setAppState((prev)=>({
                ...prev,
                dropdownActive: !prev.dropdownActive
            })
        );
    };
    const setIntroComplete = ()=>{
        setAppState((prev)=>({
                ...prev,
                isIntroComplete: !prev.isIntroComplete
            })
        );
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_lib_context__WEBPACK_IMPORTED_MODULE_3__/* .GlobalContext.Provider */ .k.Provider, {
        value: {
            appState,
            setAppState,
            toggleDropdown
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_8__.DefaultSeo, {
                ..._next_seo_config__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    ";"
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7915:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 9258:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/DrawSVGPlugin");

/***/ }),

/***/ 2947:
/***/ ((module) => {

"use strict";
module.exports = require("jquery");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 514:
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4931:
/***/ ((module) => {

"use strict";
module.exports = require("react-reveal");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,338], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();