import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Loading as CLoading } from './Loading'

export default {
  title: 'Components/Loading',
  component: CLoading,
} as Meta

const Template: Story = () => <CLoading />

export const Loading = Template.bind({})
