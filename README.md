# eRolodex

A simple angular application that shows a way to structure your application when using **[Browserify](http://browserify.org/)**.

## Running the Application

1. Compile the JavaScript by running `./build.sh`
2. `cd` into the `public` directory
3. Launch the PHP built-in server. `php -S 0.0.0.0:8080`
4. Open Browser and navigate to `localhost:8080`

## Miscellaneous Notes

This application does not use NPM's `--save-dev` feature, as it was developed on a virtual machine that shared folders 
with Windows. NPM cannot create symlinks on a shared folder mount, so NPM throws errors when trying to install with
 `--save-dev`.
 
## Dependencies

* Browserify `npm install -g browserify`
* Minify `npm install -g minify`

## Quick Browserify Explanation

Browserify allows you to reference other scripts from within a js file. As browser-based JavaScript doesn't have an idea
 of the file system, this is shimmed in by building an Abstract Syntax Tree (basically, a huge graph of all 
 scripts that are needed to run) and inserting each script into an element within an array. When `require` is called,
 it simply grabs that script from the array. _This causes concatenation as a side-effect._