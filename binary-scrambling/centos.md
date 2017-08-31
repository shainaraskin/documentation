# CentOS Binary Scrambling

## **Optional**: Launch an interactive Docker Container for the OS

```sh
docker run --rm -it centos bash
```

## Install Repo

```sh
curl https://repo.polyverse.io/config/centos/7/install | bash -s <polyverse_scrambler_key>
```

## Reinstall all packages

```sh
yum reinstall -y \*
```

## Determine source of all installed packages:

```sh
rpm -qa vendor="*Polyverse*"
```
