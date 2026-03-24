Feature: UC-2 Handling Latency


Scenario: Performance glitch user login with wait strategy
Given I am on the login page
When I login with "performance_glitch_user" and "secret_sauce"
Then Inventory page should be loaded


Scenario: Reset app state via burger menu
Given I am on the login page
When I login with "performance_glitch_user" and "secret_sauce"
Then Inventory page should be loaded
When I open the burger menu
And I click reset app state
Then the burger menu should be closed


Scenario: Logout via burger menu
Given I am on the login page
When I login with "performance_glitch_user" and "secret_sauce"
Then Inventory page should be loaded
When I open the burger menu
And I click logout
Then I should be back on the login page
