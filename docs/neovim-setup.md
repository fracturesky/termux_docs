<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
const { theme } = useData()
const neovimConfigs = [
  {
    name: 'NvChad',
    description: 'Молниеносная конфигурация Neovim с красивым пользовательским интерфейсом',
    link: 'https://github.com/NvChad/NvChad',
    installCommand: 'git clone https://github.com/NvChad/starter ~/.config/nvim && rm -rf ~/.config/nvim/.git'
  },
  {
    name: 'AstroNvim',
    description: 'Аэродинамическая конфигурация Neovim для максимальной продуктивности',
    link: 'https://github.com/AstroNvim/AstroNvim',
    installCommand: 'git clone --depth 1 https://github.com/AstroNvim/template ~/.config/nvim && rm -rf ~/.config/nvim/.git'
  },
  {
    name: 'LazyVim',
    description: 'Современная конфигурация Neovim с ленивой загрузкой плагинов',
    link: 'https://github.com/LazyVim/LazyVim',
    installCommand: 'git clone https://github.com/LazyVim/starter ~/.config/nvim && rm -rf ~/.config/nvim/.git'
  },
  {
    name: 'LunarVim',
    description: 'Расширенная IDE-подобная конфигурация для Neovim',
    link: 'https://github.com/LunarVim/LunarVim',
    installCommand: 'bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)'
  },
  {
    name: 'SpaceVim',
    description: 'Модульная конфигурация Vim/Neovim с множеством расширений',
    link: 'https://github.com/SpaceVim/SpaceVim',
    installCommand: 'curl -sLf https://spacevim.org/install.sh | bash'
  }
]
const restoreNeovimConfigCmd = "rm -rf ~/.config/nvim &&\nrm -rf ~/.local/state/nvim &&\nrm -rf ~/.local/share/nvim &&"
const selectedConfig = ref(null)
const installCmd = computed(() => {
  return selectedConfig.value
    ? `${restoreNeovimConfigCmd}\n${selectedConfig.value.installCommand}`
    : '# Выберите конфигурацию Neovim'
})
const selectConfig = (config) => {
  selectedConfig.value = selectedConfig.value === config ? null : config
}
const copyToClipboard = () => {
  navigator.clipboard.writeText(installCmd.value)
}
</script>
<style lang="css">
.config-selector .center {
  text-align: center;
}

.config-name-link {
  color: inherit;
  text-decoration: none;
}

.config-name-link:hover {
  text-decoration: underline;
}

.config-row {
  cursor: pointer;
  transition: background-color 0.2s;
}

.config-row:hover {
  background-color: #f0f0f0;
}

.selected-config {
  background-color: #e0e0e0;
}

.install-command {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.install-command pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
<div class="config-selector">
  <div>
    <table>
      <thead>
        <tr>
          <th class="center">Конфигурация</th>
          <th class="center">Описание</th>
          <th class="center">Выбор</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="config in neovimConfigs" :key="config.name" :class="[
            'config-row', 
            { 'selected-config': selectedConfig === config }
          ]">
          <td class="center">
            <a :href="config.link" target="_blank" class="config-name-link">
              <b>{{ config.name }}</b>
            </a>
          </td>
          <td>{{ config.description }}</td>
          <td class="center">
            <input type="radio" :name="'neovim-config'" :checked="selectedConfig === config"
              @click.stop="selectConfig(config)">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```bash-vue
{{ installCmd }}
```
