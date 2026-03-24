Feature: UC-1 Form Validation
  
  Scenario: Empty username and password shows error
    Given I am on the login page
    When I click the login button without username and password
    Then I should see the error "Epic sadface: Username is required"

  Scenario: Only username filled shows password error
    Given I am on the login page
    When I enter username "standard_user" without a password
    Then I should see the error "Epic sadface: Password is required"
 
  Scenario: Checkout without postal code shows error
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    And I navigate to the checkout page
    And I fill in first name "UserFirst" and last name "UserLast"
    And I click the continue button
    Then I should see the error "Error: Postal Code is required"