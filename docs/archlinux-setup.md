# Настройка ArchLinux

## Обновление системы

```bash
pacman -Suy --noconfirm
```

# Установка пакетов

Выберите нужные пакеты для установки, и команда будет автоматически сгенерирована ниже.

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()


const packages = [
  {
    name: 'zsh',
    description: 'Мощная командная оболочка с интеллектуальным автодополнением',
    link: 'https://github.com/ohmyzsh/ohmyzsh'
  },
  {
    name: 'git',
    description: 'Гибкий распределённый контроль версий',
    link: 'https://git-scm.com/'
  },
  {
    name: 'eza',
    description: 'Современный и стильный навигатор файловой системы',
    link: 'https://github.com/eza-community/eza'
  },
  {
    name: 'zoxide',
    description: 'Интуитивный помощник для быстрой навигации между директориями',
    link: 'https://github.com/ajeetdsouza/zoxide',
    customInstallCommand: 'curl -sSfL "https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh" | sh'
  },
  {
    name: 'starship',
    description: 'Молниеносный и элегантный промпт для терминала',
    link: 'https://starship.rs/'
  },
  {
    name: 'yarn',
    description: 'Быстрый менеджер пакетов для JavaScript',
    link: 'https://yarnpkg.com/'
  },
  {
    name: 'npm',
    description: 'Стандартный экосистемный менеджер пакетов Node.js',
    link: 'https://www.npmjs.com/'
  },
  {
    name: 'neovim',
    description: 'Сверхмощный и расширяемый текстовый редактор',
    link: 'https://neovim.io/'
  },
  {
    name: 'cocogitto',
    description: 'Изящный инструмент для управления git-коммитами и версионированием',
    link: 'https://github.com/cocogitto/cocogitto'
  },
  {
    name: 'curl',
    description: 'Универсальный инструмент для взаимодействия с сетевыми ресурсами',
    link: 'https://curl.se/'
  },
  {
    name: 'fzf',
    description: 'Суперскоростной нечеткий поиск в терминале',
    link: 'https://github.com/junegunn/fzf'
  },
  {
    name: 'gcc',
    description: 'Мощный компилятор для системного программирования',
    link: 'https://gcc.gnu.org/'
  },
  {
    name: 'clang',
    description: 'Современный компилятор с продвинутой оптимизацией',
    link: 'https://clang.llvm.org/'
  },
  {
    name: 'git-cliff',
    description: 'Умный генератор changelog с гибкой настройкой',
    link: 'https://github.com/orhun/git-cliff'
  },
  {
    name: 'go',
    description: 'Язык программирования для эффективной разработки',
    link: 'https://golang.org/'
  },
  {
    name: 'jq',
    description: 'Легковесный и мощный процессор JSON',
    link: 'https://stedolan.github.io/jq/'
  },
  {
    name: 'xclip',
    description: 'Удобный менеджер буфера обмена для X11',
    link: 'https://github.com/astrand/xclip'
  },
  {
    name: 'rust',
    description: 'Современный язык системного программирования',
    customInstallCommand: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
    link: 'https://rustup.rs'
  },
  {
    name: 'procs',
    description: 'Современный монитор процессов с интуитивным интерфейсом',
    link: 'https://github.com/dalance/procs'
  },
  {
    name: 'ripgrep',
    description: 'Сверхбыстрый поиск по файлам с регулярными выражениями',
    link: 'https://github.com/BurntSushi/ripgrep'
  },
  {
    name: 'typescript',
    description: 'Типизированный язык программирования для JavaScript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'tokei',
    description: 'Молниеносный счетчик строк кода',
    link: 'https://github.com/XAMPPRocky/tokei'
  },
  {
    name: 'zinit',
    description: 'Это менеджер плагинов для Zsh, который позволяет пользователям легко управлять и устанавливать плагины и темы для своей оболочки',
    customInstallCommand: 'bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"'
  },
  {
    name: "openssh",
    description: "Набор утилит для безопасного подключения к удалённым системам по протоколу SSH.",
    link: "https://www.openssh.com/",
  },
  {
    name: "base-devel",
    description: "Базовая настройка Arch"
  }
]
const selectedPackages = ref({})
packages.forEach(pkg => {
  selectedPackages.value[pkg.name] = false
})
const installPkgsCmd = computed(() => {
  const selected = Object.entries(selectedPackages.value)
    .filter(([_, isSelected]) => isSelected)
    .map(([name]) => name)

  const selectedPackageDetails = selected.map(name =>
    packages.find(pkg => pkg.name === name)
  )

  const pacmanPackages = selectedPackageDetails
    .filter(pkg => !pkg.customInstallCommand)
    .map(pkg => pkg.name)

  const customPackages = selectedPackageDetails
    .filter(pkg => pkg.customInstallCommand)

  const pacmanCmd = pacmanPackages.length > 0
    ? `pacman -S ${pacmanPackages.join(' ')} --noconfirm`
    : ''

  const customCmds = customPackages.map(pkg => pkg.customInstallCommand)

  const fullCommand = [pacmanCmd, ...customCmds]
    .filter(cmd => cmd && cmd.trim() !== '')
    .join(' && ')

  return {
    fullCommand: fullCommand || '# Выберите пакеты для установки',
    pacmanCommand: pacmanCmd,
    customCommands: customCmds
  }
})
const togglePackage = (packageName) => {
  selectedPackages.value[packageName] = !selectedPackages.value[packageName]
}
const selectAll = () => {
  const newState = Object.keys(selectedPackages.value).some(key => !selectedPackages.value[key])
  Object.keys(selectedPackages.value).forEach(key => {
    selectedPackages.value[key] = newState
  })
}
</script>
<style lang="css">
.package-selector .center {
  text-align: center;
}
</style>
<div class="package-selector">
  <div>
    <table>
      <thead>
        <tr>
          <th class="center">Пакет</th>
          <th class="center">Описание</th>
          <th class="center">
            <input type="checkbox" :checked="isAllSelected" @change="selectAll">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pkg in packages" :key="pkg.name">
          <td class="center">
            <a :href="pkg.link" target="_blank" class="package-name-link"><b>{{ pkg.name }}</b></a>
          </td>
          <td>{{ pkg.description }}</td>
          <td class="center">
            <input type="checkbox" :checked="selectedPackages[pkg.name]" @change="togglePackage(pkg.name)">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```bash-vue
{{ installPkgsCmd.fullCommand }}
```
