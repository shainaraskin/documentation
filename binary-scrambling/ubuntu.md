# Binary Scrambling: Ubuntu

## **Optional**: Launch an interactive Docker Container for the OS

```sh
docker run --rm -it ubuntu bash
```

## Install cURL

```sh
# Installs cURL on the ubuntu image
apt-get update && apt-get install -y curl
```

## Install Repo

```sh
curl https://repo.polyverse.io/config/ubuntu/xenial/install | bash -s <polyverse_scrambler_key>
```

## Reinstall all packages

```sh
apt-get update && apt-get -y --allow-change-held-packages install --reinstall $(dpkg --get-selections | awk '{'{'}print $1{'}'}')
```

## Determine which packages were installed from Polyverse

```sh
{"dpkg --get-selections | awk '{print $1}' | xargs apt-cache madison"}
```
