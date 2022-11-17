## React Native Clean Architecture with MVVM

This project explains **Clean Architecture** with **_Dependency Injection_** and
**_Separation of concerns_** along with **MVVM Design pattern**.

1. Create `data/network/interfaces`

   - Create an Interface for Http requests.

2. Create `data/network/implementations` using axios module

   - Create implementation for the Http requests using network modules like Axios.
   - Create required configs for modules.

3. Create `domain/models/interfaces`

   - Create interface for the Entities used by the application.

4. Created `domain/entities` for use cases creation

   - Create Entities, based on the interface model. Basically, implementation of the model. - These entities are used throughout the different layers of the application.
   - Also exports a static method to create new entity.

5. Create `domain/use cases` interfaces creation for executing use cases and entity

   - Create Interfaces for the Use cases for each Entity, typically the execute action.

6. Create `domain/errors` for use cases creation

   - Create Errors implementation for each use cases.

7. Create `domain/repository` interfaces for all the use cases and entity.

   - Create Repository interface for all the use cases defined.

8. Create `domain/usecases/implementations` for use cases with repository and entity.

   - Create implementations of use cases defined earlier.
   - Use Case implementation makes use of repository, expected to be passed in, to execute the action from that repository.

9. Create `domain/repositories/implementations` for repository with entity.

   - Create implementations of Repository defined earlier.
   - Repository implementation makes use of http manager, expected to be passed in.
   - Repository implementation creates the actual API calls with Urls and configs or throws error use cases.

10. Create `di/interfaces` for the use cases

    - Create interface for the use cases based on the Use case implementation defined earlier.

11. Create `di/implementations` for the use cases

    - Instantiate http manager
    - Instantiate repository implementation with http manager to be passed in.
    - Instantiate use cases with Use case implementations and interface defined earlier with repository to be passed in.

12. Instantiate `di` with all the above

    - Execute all the di and pass in the executions for next step.
    - Execute http manager, repository implementation with http manager, use case implementation with repository.

13. Use the `di` implementations inside the Presentation layer

    - utilize the di with its actions to execute inside View controller.
