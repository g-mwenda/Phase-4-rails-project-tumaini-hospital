# Tumaini Hospital Website

This is the documentation for the Tumaini Hospital website, which is built with React on the frontend and Rails on the backend. The website caters to three types of users: general users, doctors, and administrators. It provides features such as booking appointments, managing patient lists, updating appointments, adding patients, deleting patients, and managing user accounts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [User Roles](#user-roles)
- [Routes](#routes)
- [Default Admin User](#default-admin-user)
- [Website Link](#website-link)
- [License](#license)
- [Authors](#authors)

## Features

The Tumaini Hospital website offers the following features:

- **General User**
  - Book appointments with preferred doctors.

- **Doctor**
  - View patient lists.
  - View and update appointments.
  - Add new patients.

- **Admin**
  - Delete patients.
  - Add new users.

## Installation

To install and run the Tumaini Hospital website locally, please follow these steps:

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Change into the project directory:

   ```
   cd tumaini-hospital-website
   ```

3. Install frontend dependencies:

   ```
   cd client
   npm install
   ```

4. Install backend dependencies:

   ```
   bundle install
   ```

## Usage

To start the Tumaini Hospital website, follow these steps:

1. Start the backend server:

   ```
   rails server
   ```

2. Start the frontend development server:

   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the Tumaini Hospital website.

## User Roles

The Tumaini Hospital website supports three user roles:

1. **General User**: This role allows users to book appointments with their preferred doctors.

2. **Doctor**: Doctors can view patient lists, view and update appointments, and add new patients.

3. **Admin**: Administrators have the ability to delete patients and add new users.

## Routes

The following routes are available in the Tumaini Hospital website:

- **Login Page**: `/account/login`
  - This is the route for the login page, where users can authenticate themselves.

- **Dashboard**: `/account/dashboard`
  - This is the route for the dashboard, which provides access to the relevant features based on the user role.

## Default Admin User

To log in as an admin user, use the following credentials:

- Email: testadmin@gmail.com
- Password: 1234

Please note that it is recommended to change the default admin password after initial login for security reasons.

## Website Link

The Tumaini Hospital website is deployed and can be accessed at https://phase4hospital.onrender.com.


## License

The Tumaini Hospital website is released under the [MIT License](https://github.com/cheche-henry/phase-4-hospital-app/blob/main/LICENSE). You are free to use, modify, and distribute this software. See the [LICENSE](https://github.com/cheche-henry/phase-4-hospital-app/blob/main/LICENSE) file for more details.

## Authors

The Tumaini Hospital website was developed by the following authors:

- Henry Cheche - henry.cheche@student.moringaschool.com
- Moesha Gitae - moesha.githae@student.moringaschool.com
- Gabriel Mwenda - gabriel.mwenda@student.moringaschool.com
- Nahson Mutethia - nashtesh22@gmail.com
