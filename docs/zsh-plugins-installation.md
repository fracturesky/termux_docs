# Установка zsh плагинов

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()

const zshPlugins = [
  {
    name: 'ohmyzsh/ohmyzsh',
    description_ru: 'Фреймворк для настройки Zsh.',
    description_en: 'Framework for configuring Zsh.',
    link: 'https://github.com/ohmyzsh/ohmyzsh'
  },
  {
    name: 'zsh-users/zsh-autosuggestions',
    description_ru: 'Автозаполнение команд из истории.',
    description_en: 'Command auto-completion from history.',
    link: 'https://github.com/zsh-users/zsh-autosuggestions'
  },
  {
    name: 'zsh-users/zsh-syntax-highlighting',
    description_ru: 'Подсветка синтаксиса команд.',
    description_en: 'Syntax highlighting for commands.',
    link: 'https://github.com/zsh-users/zsh-syntax-highlighting'
  },
  {
    name: 'agkozak/zsh-z',
    description_ru: 'Быстрая навигация по директориям.',
    description_en: 'Quick navigation between directories.',
    link: 'https://github.com/agkozak/zsh-z'
  },
  {
    name: 'zdharma-continuum/fast-syntax-highlighting',
    description_ru: 'Быстрая подсветка синтаксиса.',
    description_en: 'Fast syntax highlighting.',
    link: 'https://github.com/zdharma-continuum/fast-syntax-highlighting'
  },
  {
    name: 'zsh-users/zsh-completions',
    description_ru: 'Дополнительные автодополнения для команд.',
    description_en: 'Additional auto-completions for commands.',
    link: 'https://github.com/zsh-users/zsh-completions'
  },
  {
    name: 'romkatv/powerlevel10k',
    description_ru: 'Настраиваемая тема для Zsh.',
    description_en: 'Customizable theme for Zsh.',
    link: 'https://github.com/romkatv/powerlevel10k'
  },
  {
    name: 'hlissner/zsh-autopair',
    description_ru: 'Автоматическое закрытие скобок и кавычек.',
    description_en: 'Automatically closes brackets and quotes.',
    link: 'https://github.com/hlissner/zsh-autopair'
  },
  {
    name: 'MichaelAquilina/zsh-you-should-use',
    description_ru: 'Напоминает использовать алиасы.',
    description_en: 'Reminds you to use aliases.',
    link: 'https://github.com/MichaelAquilina/zsh-you-should-use'
  },
  {
    name: 'zsh-users/zsh-history-substring-search',
    description_ru: 'Поиск команд в истории по подстроке.',
    description_en: 'Search commands in history by substring.',
    link: 'https://github.com/zsh-users/zsh-history-substring-search'
  }
];

const selectedPlugins = ref({})
zshPlugins.forEach(plugin => {
  selectedPlugins.value[plugin.name] = false
})

const installPluginsCmd = computed(() => {
  const selected = Object.entries(selectedPlugins.value)
    .filter(([_, isSelected]) => isSelected)
    .map(([name]) => name)

  if (selected.length === 0) {
    return {
      fullCommand: '# Выберите плагины для установки',
      zinit_commands: []
    }
  }

  const zinit_commands = selected.map(pluginName => {
    const plugin = zshPlugins.find(p => p.name === pluginName)
    return `# ${plugin.description_en}\nzinit light ${pluginName}`
  })

  return {
    fullCommand: '# === Zinit Plugins ===\n' + zinit_commands.join('\n\n'),
    zinit_commands: zinit_commands
  }
})

const togglePlugin = (pluginName) => {
  selectedPlugins.value[pluginName] = !selectedPlugins.value[pluginName]
}

const selectAll = () => {
  const newState = Object.keys(selectedPlugins.value).some(key => !selectedPlugins.value[key])
  Object.keys(selectedPlugins.value).forEach(key => {
    selectedPlugins.value[key] = newState
  })
}

const isAllSelected = computed(() => {
  return Object.values(selectedPlugins.value).every(value => value)
})
</script>

<style lang="css">
.zsh-plugin-selector .center {
  text-align: center;
}

.package-name-link {
  text-decoration: none;
  color: inherit;
}

.package-name-link:hover {
  text-decoration: underline;
}
</style>

<div class="zsh-plugin-selector">
  <div>
    <table>
      <thead>
        <tr>
          <th class="center">Плагин</th>
          <th class="center">Описание</th>
          <th class="center">
            <input type="checkbox" :checked="isAllSelected" @change="selectAll">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plugin in zshPlugins" :key="plugin.name">
          <td class="center">
            <a :href="plugin.link" target="_blank" class="package-name-link"><b>{{ plugin.name }}</b></a>
          </td>
          <td>{{ plugin.description_ru }}</td>
          <td class="center">
            <input type="checkbox" :checked="selectedPlugins[plugin.name]" @change="togglePlugin(plugin.name)">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```bash-vue
{{ installPluginsCmd.fullCommand }}
```
