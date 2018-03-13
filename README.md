# QA-automation-assignment :: Automation testing project to test addidus basic functionality and API

### What is this repository for? ###

This Test Project is intended to build a solid framework to test addidus basic functionality and API.
The framework should be maintainable. I have eight UI scenarios automated with all its dependencies and 3 API scenarios.

### features:
* **Automation tool** : Selenium webdriver.
* **Scripting language** : Javascript.
* **Scripting IDE** : VSCode.
* **Testing Framework** : cucumber / Gherkin to apply BDD.
* **Reporting** : Cucumber html reporter.
* **Source Control**: git with github.
* **Linting**: ESlint.
* **Supported Browsers** : default chrome but other browsers are also supported by changing the browser name from 'selenium-cucumber-js.json' file.
* **Environment** : Local Host.
* **Package manager**  : `npm`

### How do I get set up? ###

First you should get the App under test and run it. Then you should get the tests
* Preconditions:
	- Visual Studio code is installed (or any development IDE)
	- Nodejs is installed
	- git is installed
* Database configuration
	- No DB required
* How to run tests
	-  git clone https://github.com/csadek/qa_engineer_v2.git - get the tests
	- npm run lint - lint check
	- npm run fix - lint check + autofixes + prettify code with prettier
	- npm run test - run test suite

### Main Concepts ###

*	I Follow the [Git model](http://nvie.com/posts/a-successful-git-branching-model/) and [good practices](https://sethrobertson.github.io/GitBestPractices/), like **feature branches**, commit early and often, useful commit messages, clean history via rebase, **squash** etc.
*  [Write Once, Test Everywhere](http://electronicdesign.com/embedded/java-write-once-test-everywhere) means the [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) tests here should be [SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth) for all platforms we support (Web). It is important that tests should be platform agnostic, but the execution engine stays aware in the same time. Key feature here is the Automation [DSL](http://martinfowler.com/books/dsl.html) and a [Strategy pattern](https://gist.github.com/atsuya046/8534620). This can be achieved via Application driver layer. The DSL will encapsulate commonly used functions (e.g. login, navigation) and [web-element action wrappers]() (e.g. safe `wait_and_click`)
*	Abstractions live longer than details, so when creating test logic, I invest in the abstractions, not the concrete implementation.
*	A screen shot is added per fail.
*   Favor Declarative (**WHAT**) -over- Imperative (**HOW**) BDD. It is almost always better to develop atomic steps and reuse them in more generic ones via [Calling steps from step definitions](https://github.com/cucumber/cucumber/wiki/Calling-Steps-from-Step-Definitions). Find out more on [Pushing how down](http://www.marcusoft.net/2013/04/PushTheHowDown.html).
*	Favoring a ObjectMap over a PageObject ObjectMap (to avoid learning an entire PageObj complex abstraction layer and taxonomy) can be found in ---Selenium Testing Tools Cookbook, 2nd Edition--- book and seleniumeasy. Think of it as composition-over-inheritance, favoring a more flexible and powerful approach and avoiding design complex taxonomies. This also supports a data-driven approach as selectors are NOT hard coded in your code == no configuration possible. PageObj ties your code with complex abstractions, so in order to reuse it you always need this particular page in your web sites. Configuration files have their place, but when they are packaged with the code and not intended to be updated by the user, it takes just as many steps to update the value in the configuration file as it does to update it in the code, so there's really no encapsulation taking place. 

Here are some considerations before jumping into POMs (like holmium.core and page-objects) right away

*	Automatically built Page Objects are hard to maintain and use. There is little to no grouping of elements into headers and footers, or identified widgets. There would just be a big list and we question whether the automatically generated names read well enough to explain what they were for.
*	It might limit your design, e.g. starting to ignore better abstractions.
*	Not enough flexibility, especially for refactoring (both structure and implementation).

Find more here at dzone.

### Code architecture ###
Framework's layers should be close to the following diagram:
```
				===========================
				| Gherkin (feature files) |
				===========================
					|
			=====================================
			| Step definitions (step_functions) |
			=====================================
					|
				===============================
				|            DSL(pages)       |
				| (domain_models, strategies) |
				===============================
					|
			=========================================
			|            Selenium Wrappers(core)    |
			| (facade, decorators, adapters, proxy) |
			=========================================
					|
				==================    ===============
				|| Automation code  || webdriver_api |
				==================    ================
```
_________________________________________________________________
SELENIUM ARCHITECTURE HERE

### Test Scope

The scope of testing here is having a full coverage for the manual scenarios written at the feature files. However, automation is only covering basic scnearios. The first API scenario fails as every component does not have at least analyAcs data “analyAcs_name” in it.