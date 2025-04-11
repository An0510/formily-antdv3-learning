<script setup>
import { createForm } from '@formily/core'
import { Field, ArrayField } from '@formily/vue'
import { Form, FormItem, Checkbox, Submit } from '@formily/antdv'

// 创建表单实例
const form = createForm({
  single: ''
})

// 提交表单的方法
const onSubmit = (value) => {
  console.log(value)
}
</script>

<template>
  <Form :form="form">
    <Field
      name="single"
      title="是否确认"
      :decorator="[FormItem]"
      :component="[Checkbox, {
        onChange: (value) => {
        console.log('Checkbox value changed:', value);
      }
      }]"
    />
    <ArrayField
      name="multiple"
      title="复选"
      :dataSource="[
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
      ]"
      :decorator="[FormItem]"
      :component="[Checkbox.Group]"
    >
      <template v-slot:option="{ option }">
        <div>{{ option.label }}</div>
      </template>
    </ArrayField>
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
