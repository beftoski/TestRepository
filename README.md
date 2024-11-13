# TestRepository

Problem:

In the current codebase, the selectors used for automation tests are inconsistent. We have multiple types of selectors, including:
Test IDs: Randomly generated or inconsistent test identifiers.
Random Selectors: These selectors are generated dynamically or through other non-standardized means, making them difficult to maintain.
Hardcoded Selectors: Some elements are targeted using hardcoded CSS classes or IDs, which are prone to changes and are brittle in the long term.
Child Selectors: Some fields are accessed using parent-child selector relationships, which can break when the structure of the HTML changes.
This inconsistency leads to fragile test cases that are difficult to maintain, and it increases the likelihood of false negatives in test results when UI changes occur.

Solution:

To address this issue, we propose unifying the approach to how selectors are defined for all fields across the website. The key focus is on using consistent and stable selectors that are explicitly tied to the testing purpose (e.g., identifying elements for automated tests).
One possible solution is to standardize the use of data-testid attributes for every field in the website. This approach ensures that selectors remain consistent, isolated from changes to the UI design or CSS classes, and are solely used for test automation purposes.

Proposed Solution Details:

Use data-testid for all elements that need to be accessed by automation tests. This attribute is non-intrusive, readable, and provides a stable way to target elements for testing without affecting the production functionality.
By defining unique and consistent data-testid attributes for all relevant UI elements (buttons, input fields, links, etc.), we ensure that:
Selectors are more predictable: Each element can be consistently identified by its unique data-testid value, regardless of changes to the DOM structure or styling.
Separation of concerns: Test-specific attributes (like data-testid) are distinct from presentation-related attributes, so changes to the UI's look and feel won't impact test reliability.
Maintainability: Test code will be easier to maintain because elements can be located in a consistent manner across the application.
Collaboration: With a clear convention, teams across development, QA, and testing will be aligned in how to identify elements for automation.

Reasoning:

By standardizing the use of data-testid selectors across the website, we aim to create a more stable, maintainable, and scalable testing environment. This approach will significantly improve the reliability of automation tests and reduce maintenance overhead as the application evolves. It also ensures clear collaboration between development and testing teams, promoting a more efficient workflow overall.
