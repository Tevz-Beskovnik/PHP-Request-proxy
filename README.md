# Proxy for PHP

## Why does this exist?

I needed to quickly hack together a proxy to rewrite routes for php MVC task i had to do for my UNI course.

No one wants to configure XAMPP on MacOS lord know why all those access errors are happening anyways

## How to use this

### Requirements:

[php-cli](https://www.php.net/manual/en/features.commandline.webserver.php)

### Setting up:

copy and paste all the provided files into folder proxy. Make sure that your `/proxy/` folder is inside the root folder of your php project (thats where your `index.php` file should be).

Rename `.env.example` to `.env`.

Run:

```sh
cd ./proxy
yarn
```

To start in the proxy simply run:

```sh
./proxy/run.sh
```

**Make sure you are the root of your php project when running this**

## Having issues while using?

Open a PR and fix it yourself

## Worried about security?

Read the code it's 30 lines :).

##### Feel free to use where ever idc
