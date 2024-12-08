# Настройка **Termux**

## Настройка доступа к хранилищу
```bash
termux-setup-storage
```

## Обновление системы
```bash
pkg upgrade -y && pkg update -y && apt upgrade -y && apt update -y
```

## Удаление motd
**motd** (*Message of the Day*) в **Termux** — это сообщение, которое отображается при каждом запуске терминала.

Нам он не понадобится в оболочке **Termux**, потому что мы будем использовать **ArchLinux**. Чтобы удалить **motd**
выполните следующую команду:
```bash
rm -rf $PREFIX/etc/motd*
```

## Установка proot-distro
```bash
pkg install proot-distro -y
```

## Установка **ArchLinux**
```bash
pd i archlinux
```

## Модифицируем .bashrc
```bash
echo "pd sh archlinux --bind /sdcard:/root/storage" >> .bashrc
```

## Заключительный этап
Перезагрузите **Termux**, чтобы появится в **ArchLinux** оболочке.
