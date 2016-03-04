@dashboard
Feature: Dashboard Archived Projects
  Background:
    Given I sign in as a user
    And I own project "Shop"
    And I own project "Forum"
    And project "Forum" is archived
    And I visit dashboard page

  Scenario: I should see non-archived projects on dashboard
    Then I should see "Shop" project link
    And I should not see "Forum" project link

  Scenario: I toggle show of archived projects on dashboard
    When I click "Show archived projects" link
    Then I should see "Shop" project link
    And I should see "Forum" project link
