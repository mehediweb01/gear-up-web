## Backend API ENDPOINT:

| Method | Endpoint                      | Description                                |
| ------ | ----------------------------- | ------------------------------------------ |
| POST   | `/api/auth/register`          | Register a new user (CUSTOMER or PROVIDER) |
| POST   | `/api/auth/login`             | Login user and return access token         |
| GET    | `/api/auth/me`                | get my details                             |
| GET    | `/api/users`                  | Get all users (ADMIN)                      |
| PATCH  | `/api/users/:id`              | update user status (ADMIN)                 |
| GET    | `/api/gear`                   | Get all gear items                         |
| GET    | `/api/gear/:id`               | Get single gear details                    |
| GET    | `/api/gear/provider/my-gears` | Get provider gear (provider)               |
| POST   | `/api/gear/add`               | Create a new gear (Provider)               |
| PATCH  | `/api/gear/:id`               | Update gear (Provider)                     |
| DELETE | `/api/gear/:id`               | Delete gear (Provider)                     |
| POST   | `/api/rentals/create`         | Create a rental order (customer)           |
| GET    | `/api/rentals`                | Get rental history (customer)              |
| GET    | `/api/rentals/:id`            | Get single rental details (customer)       |
| PATCH  | `/api/rentals/:id`            | update order status (provider)             |
| GET    | `/api/rentals/provider`       | get incoming orders (provider)             |
| GET    | `/api/rentals/admin`          | get all orders (Admin)                     |
| POST   | `/api/payments/checkout`      | Create Stripe checkout session (customer)  |
| POST   | `/api/payments/webhook`       | Handle Stripe webhook events               |
| GET    | `/api/payments`               | Get user payment history (customer)        |
| GET    | `/api/payments/:id`           | Get payment details (customer)             |
| POST   | `/api/reviews`                | Create a review (customer)                 |
| GET    | `/api/category`               | get all categories (public)                |
| POST   | `/api/category/create`        | Create a category (Admin)                  |
