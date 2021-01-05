(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tutorial-1-accounts-arguments-and-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-1-accounts-arguments-and-types"}},[t._v("#")]),t._v(" Tutorial 1: Accounts, Arguments, and Types")]),t._v(" "),s("p",[t._v("This tutorial covers the basics of creating and mutating accounts using Anchor.\nIt's recommended to read "),s("RouterLink",{attrs:{to:"/tutorials/tutorial-0.html"}},[t._v("Tutorial 0")]),t._v(" first, as this tutorial will\nbuild on top of it.")],1),t._v(" "),s("h2",{attrs:{id:"clone-the-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repo"}},[t._v("#")]),t._v(" Clone the Repo")]),t._v(" "),s("p",[t._v("To get started, clone the repo.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/project-serum/anchor\n")])])]),s("p",[t._v("And change directories to the "),s("a",{attrs:{href:"https://github.com/project-serum/anchor/tree/master/examples/tutorial/basic-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" anchor/examples/tutorial/basic-1\n")])])]),s("h2",{attrs:{id:"defining-a-program"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-program"}},[t._v("#")]),t._v(" Defining a Program")]),t._v(" "),s("p",[t._v("We define our program as follows")]),t._v(" "),s("div",{staticClass:"language-rs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rs"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#![feature(proc_macro_hygiene)]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("prelude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[program]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("basic_1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Initialize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" my_account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Accounts)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Initialize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[account(mut)]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" my_account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProgramAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(AnchorSerialize, AnchorDeserialize)]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("MyAccount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Some new syntax elements are introduced here.")]),t._v(" "),s("p",[t._v("First, notice the "),s("code",[t._v("data")]),t._v(" argument passed into the program. This argument and any other valid\nRust types can be passed to the instruction to define inputs to the program. If you'd like to\npass in your own type, then it must be defined in the same "),s("code",[t._v("src/lib.rs")]),t._v(" file as the\n"),s("code",[t._v("#[program]")]),t._v(" module (so that the IDL can pick it up). Additionally,\nnotice how we take a mutable reference to "),s("code",[t._v("my_account")]),t._v(" and assign the "),s("code",[t._v("data")]),t._v(" to it. This leads us\nthe "),s("code",[t._v("Initialize")]),t._v(" struct, deriving "),s("code",[t._v("Accounts")]),t._v(".")]),t._v(" "),s("p",[t._v("There are two things to notice about "),s("code",[t._v("Initialize")]),t._v(". First, the\n"),s("code",[t._v("my_account")]),t._v(" field is marked with the "),s("code",[t._v("#[account(mut)]")]),t._v(" attribute. This means that any\nchanges to the field will be persisted upon exiting the program. Second, the field is of\ntype "),s("code",[t._v("ProgramAccount<'info, MyAccount>")]),t._v(", telling the program it "),s("em",[t._v("must")]),t._v(" be "),s("strong",[t._v("owned")]),t._v("\nby the currently executing program and the deserialized data structure is "),s("code",[t._v("MyAccount")]),t._v(".")]),t._v(" "),s("p",[t._v("In a later tutorial we'll delve more deeply into deriving "),s("code",[t._v("Accounts")]),t._v(". For now, just know\none must mark their accounts "),s("code",[t._v("mut")]),t._v(" if they want them to, well, mutate. 😉")]),t._v(" "),s("h2",{attrs:{id:"creating-and-initializing-accounts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-initializing-accounts"}},[t._v("#")]),t._v(" Creating and Initializing Accounts")]),t._v(" "),s("p",[t._v("For a moment, assume an account of type "),s("code",[t._v("MyAccount")]),t._v(" was created on Solana, in which case,\nwe can invoke the above "),s("code",[t._v("initialize")]),t._v(" instruction as follows.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  accounts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myAccount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("The last element passed into the method is common amongst all dynamically generated\nmethods on the "),s("code",[t._v("rpc")]),t._v(" namespace, containing several options for a transaction. Here,\nwe specify the "),s("code",[t._v("accounts")]),t._v(" field, an object of all the addresses the transaction\nneeds to touch.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("If you've developed on Solana before, you might notice two things 1) the ordering of the accounts doesn't\nmatter and 2) the "),s("code",[t._v("isWritable")]),t._v(" and "),s("code",[t._v("isSigner")]),t._v("\noptions are not specified on the account anywhere. In both cases, the framework takes care\nof these details for you, by reading the IDL.")])]),t._v(" "),s("p",[t._v("However it's common--and sometimes necessary for security purposes--to batch\ninstructions together. We can extend the example above to both create an account\nand initialize it in one atomic transaction.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The Account to create.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myAccount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Account")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Atomically create the new account and initialize it with the program.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  accounts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    myAccount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  signers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  instructions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SystemProgram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fromPubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      newAccountPubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      space"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      lamports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMinimumBalanceForRentExemption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      programId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("programId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fetch the newly created account from the cluster.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("myAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check it's state was initialized.")]),t._v("\nassert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ok")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("anchor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),s("p",[t._v("Here, notice the "),s("strong",[t._v("two")]),t._v(" fields introduced: "),s("code",[t._v("signers")]),t._v(" and "),s("code",[t._v("instructions")]),t._v(". "),s("code",[t._v("signers")]),t._v("\nis an array of all "),s("code",[t._v("Account")]),t._v(" objects to sign the transaction and "),s("code",[t._v("instructions")]),t._v(" is an\narray of all instructions to run "),s("strong",[t._v("before")]),t._v(" the explicitly specified program instruction,\nwhich in this case is "),s("code",[t._v("initialize")]),t._v(". Because we are creating "),s("code",[t._v("myAccount")]),t._v(", it needs to\nsign the transaction, as required by the Solana runtime.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("In future work, we might want to add something like a "),s("em",[t._v("Builder")]),t._v(" pattern for constructing\ncommon transactions like creating and then initializing an account.")])]),t._v(" "),s("p",[t._v("As before, we can run the example tests.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("anchor test\n")])])]),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("We've covered all the basics of developing applications using Anchor. However, we've\nleft out one import aspect to ensure the security of our programs--validating input\nand access control. We'll cover that next.")])])}),[],!1,null,null,null);a.default=e.exports}}]);