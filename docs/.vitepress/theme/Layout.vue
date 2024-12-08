<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const packages = [
  { 
    name: 'zsh', 
    description: 'Мощная командная оболочка с расширенными возможностями'
  },
  { 
    name: 'git', 
    description: 'Распределённая система контроля версий'
  },
  { 
    name: 'eza', 
    description: 'Современная замена команды ls'
  },
  { 
    name: 'zoxide', 
    description: 'Умный навигатор по директориям (cd команда)'
  },
  { 
    name: 'starship', 
    description: 'Минималистичный и быстрый промпт для терминала'
  },
  { 
    name: 'yarn', 
    description: 'Быстрый и надежный пакетный менеджер для Node.js'
  },
  { 
    name: 'npm', 
    description: 'Стандартный пакетный менеджер для Node.js'
  },
  { 
    name: 'neovim', 
    description: 'Улучшенная версия текстового редактора Vim'
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
  
  return selected.length > 0 
    ? `pacman -S ${selected.join(' ')} --noconfirm`
    : '# Выберите пакеты для установки'
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

<template>
  <div class="package-selector">
    <div class="table-container mb-6">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-2 text-left border">Пакет</th>
            <th class="p-2 text-left border">Описание</th>
            <th class="p-2 text-center border">
              <input type="checkbox" id="selectAll" onclick="toggleSelect(this)">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pkg in packages" :key="pkg.name" class="hover:bg-gray-50">
            <td class="p-2 border font-mono">{{ pkg.name }}</td>
            <td class="p-2 border">{{ pkg.description }}</td>
            <td class="p-2 border text-center">
              <input
                type="checkbox"
                :checked="selectedPackages[pkg.name]"
                @change="togglePackage(pkg.name)"
                class="w-4 h-4 cursor-pointer"
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
