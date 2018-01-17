# Polymorphic Linux

Polymorphic Linux are compile-time scrambled sets of drop-in-replacement packages for popular Linux distributions. This guide goes through the basics of installing and updating Polyverse's Polymorphic Linux repositories on your system.




## Alpine

**Optional**: Launch an interactive Docker Container for the OS

```sh
docker run --rm -it alpine sh
```

Install cURL and bash, then switch into bash

```sh
# Installs cURL and bash on the alpine, then switches into bash
apk update && apk add -y curl bash && bash
```

Install Repo

```sh
curl https://repo.polyverse.io/config/alpine/v3.6/install | sh -s "<polyverse_scrambler_key>"
```

Reinstall all packages

```sh
apk update && apk info -q | xargs apk fix
```

Determine source of all installed packages:

```sh
apk info | xargs apk policy
```






## CentOS

Install Repo

```sh
curl https://repo.polyverse.io/config/centos/7/install | bash -s <polyverse_scrambler_key>
```

Reinstall all packages

```sh
yum reinstall -y \*
```

Determine source of all installed packages:

```sh
rpm -qa vendor="*Polyverse*"
```






## Ubuntu

**Optional**: Launch an interactive Docker Container for the OS

```sh
docker run --rm -it ubuntu bash
```

Install cURL

```sh
# Installs cURL on the ubuntu image
apt-get update && apt-get install -y curl
```

Install Repo

```sh
curl https://repo.polyverse.io/config/ubuntu/xenial/install | bash -s <polyverse_scrambler_key>
```

Reinstall all packages

```sh
apt-get update && apt-get -y --allow-change-held-packages install --reinstall $(dpkg --get-selections | awk '{'{'}print $1{'}'}')
```

Determine which packages were installed from Polyverse

```sh
{"dpkg --get-selections | awk '{print $1}' | xargs apt-cache madison"}
```
