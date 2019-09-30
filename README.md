# Buyme Task List

## Basic requirements
### Software Versions
* PHP version 5.6.40
* Laravel version 5.2.45
* Ember version 2.18.2

### Environment
* MySql DB named 'laravel', username 'gargamel', password 'qa1234'.
* Laravel server running on IP 192.168.14.105.
* Apache server with 'DocumentRoot' to '/tasks/public', and a 'Directory' entry to /tasks.

### Build
* From the tasks folder run 'php artisan migrate'.
* From the tasks/tasks-fe run the 'build_fe.sh' script to build the ember app.

## Current Functionality
### Available
* View tasks.
* Add tasks.
* Mark tasks as completed.
* Delete tasks.
* Interchanging tasks colors.

### Missing

* Tasks summary.
