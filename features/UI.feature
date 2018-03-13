@web @UI
# As a <type of user> I want <some goal> so that <some reason>
Feature: adidas
As a User I want to navigate to adidas home page
So that I can perform tasks related to it

    Background: Visit adidas Home Page
        Given I am on adidas home page

    @search
    Scenario Outline: Search Item
        When I search for "<item>"
        Then search results for "<item>" should be displayed
        Examples:
            | item   |
            | shoes  |
            | shirts |

    @filter
    Scenario Outline: filter search
        When I search for "<item>"
        And I filter the search results with gender "<type>"
        Then search filter for "<type>" should be displayed
        Examples:
            | item   | type  |
            | shoes  | Men   |
            | shirts | Women |

    @view
    Scenario Outline: view item
        When I search for "<item>"
        And I click on specific item
        Then Item details should be displayed
        Examples:
            | item   |
            | shoes  |
            | shirts |

    @wishList
    Scenario Outline: Add wishList
        When I search for "<item>"
        And I wishList specific item
        Then wishLists count is increased
        And Item should be added to wishLists page
        Examples:
            | item   |
            | shoes  |
            | shirts |
