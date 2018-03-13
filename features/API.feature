@API
# As a <type of user> I want <some goal> so that <some reason>
Feature: adidas API
As a User I want to send API request to the landing page
So that I can perform tasks related to it

    Background: Visit adidas Home Page
        When I send API request to adidas landing page

    @LandingAPI
    Scenario: Check Analytics Data of Each Component
        Then every component has at least analytics data "analytics_name" in it

    @LandingAPI
    Scenario: Check All Images at landing API
        Then All images are retrieved successfully

    @LandingAPI
    Scenario: Check Response Time
        Then response time is bellow "1" second
