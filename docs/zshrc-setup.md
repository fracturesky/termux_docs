# Конфигурация .zshrc

# Генерация ssh ключей
```bash
# Function to generate an ed25519 key
gen_ed25519_key() {
    local nickname=$1
    local site=$2
    ssh-keygen -t ed25519 -a 256 -f ~/.ssh/"${nickname}_${site}_ed25519.key"
}

# Function to generate an RSA key
gen_rsa_key() {
    local nickname=$1
    local site=$2
    ssh-keygen -t rsa -b 4096 -f ~/.ssh/"${nickname}_${site}_rsa.key"
}

# Function to generate an ECDSA key
gen_ecdsa_key() {
    local nickname=$1
    local site=$2
    ssh-keygen -t ecdsa -b 521 -f ~/.ssh/"${nickname}_${site}_ecdsa.key"
}

# Example:
# gen_ed25519_key "my_nickname" "example.com"
# gen_rsa_key "my_nickname" "example.com"
# gen_ecdsa_key "my_nickname" "example.com"
```
