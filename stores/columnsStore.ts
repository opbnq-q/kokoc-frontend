import { defineStore } from 'pinia'
import type { IColumn } from '~/models/column'
import type { IComment } from '~/models/comments'


export interface State {
  columns: IColumn[],
  selectedColumn: IColumn | null,
  page: number,
  total: number,
  selectedColumnIndex: number | null,
  comments: IComment[] | null
}

type SuccessReponseData = { status: "success" | "error", data: { items: IColumn[], total: number } }

export const useColumnsStore = defineStore({
  id: 'columnStoreStore',
  state: (): State => ({
    columns: [],
    selectedColumn: null,
    page: 0,
    total: 0,
    selectedColumnIndex : null,
    comments: null
  }),
  actions: {
    incrementPage() {
      this.page++
    },
    async loadColumns() {
      if (this.total === this.columns.length) {
        return
      }
      this.page++
      if (this.page > 0) {
        const response = await fetch(`https://foot.gogacoder.com/api/columns?page=${this.page}`)
        const body: SuccessReponseData = await response.json()
        this.columns.push(...body.data.items.map(
          column => ({ ...column, createdAt: dateConversion(column.createdAt) })
        ))
        this.total = body.data.total
      }
    },
    async firstLoad() {
      this.page = 0
      const { data, status }: SuccessReponseData
        = await $fetch('https://foot.gogacoder.com/api/columns')
      if (status === 'success') {
        this.total = data.total
        this.columns = data.items.map(
          column => ({ ...column, createdAt: dateConversion(column.createdAt) })
        )
      }
    },
    async updateComments() {
      const response: {status: "error" | "success", data: {items: IComment[]}} = await $fetch(`https://foot.gogacoder.com/api/comments?limit=1000&columnId=${this?.selectedColumn!.id}`)
      if (response.status === 'success') {
        this.comments = response.data.items
      }
    },
    async selectColumn(index: number) {
      this.selectedColumn = this.columns[index]
      this.selectedColumnIndex = index
      await this.updateComments()
    },
    cancelColumn() {
      this.selectedColumn = null
      this.selectedColumnIndex = null,
      this.comments = null
    },
    nextColumn() {
      if (this.total - 1 < (this.selectedColumnIndex as number) + 1 || this.selectedColumnIndex === null) return;
      this.selectColumn(this.selectedColumnIndex + 1);
    },
    previousColumn() {
      if (this.selectedColumnIndex === null || (this.selectedColumnIndex as number) < 0) return;
      this.selectColumn(this.selectedColumnIndex - 1);
    },
  async searchColumns(text?: string) {
    const {data, status}: SuccessReponseData = await $fetch(`https://foot.gogacoder.com/api/columns?limit=1000&text=${text}`)
    if (status === 'success') {
      this.columns = data.items
      this.total = data.total
    }
  }
  }
})
