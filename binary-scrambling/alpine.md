# Alpine

## **Optional**: Launch an interactive Docker Container for the OS

```sh
docker run --rm -it alpine sh
```

## Install cURL and bash, then switch into bash

```sh
# Installs cURL and bash on the alpine, then switches into bash
apk update && apk add -y curl bash && bash
```

## Install Repo

```sh
curl https://repo.polyverse.io/config/alpine/v3.6/install | sh -s "<polyverse_scrambler_key>"
```

## Reinstall all packages

```sh
apk update && apk info -q | xargs apk fix
```

## Determine source of all installed packages:

```sh
apk info | xargs apk policy
```
