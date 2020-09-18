import { Component } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: 'global.page.html',
  styleUrls: ['global.page.scss'],
})
export class GlobalPage {
  // json文本框显示行数
  rows = 20;
  // json文本框值
  jsonValue = '';
  errorMessage = '';
  successMessage = '';

  constructor() {}

  // 格式化
  format() {
    if(this.nullCheck()) return;
    try {
      this.jsonValue = this.replace(this.jsonValue);
      this.errorMessage = '';
      this.successMessage = '格式化完成';
    } catch (error) {
      this.successMessage = '';
      this.errorMessage = error.message;
    }
  }

  // 复制
  copy() {
    if(this.nullCheck()) return;
    const clipboard = require('copy-to-clipboard');
    clipboard(this.jsonValue.trim());
    this.errorMessage = '';
    this.successMessage = '复制完成';
  }

  // 清空
  clear() {
    if(this.nullCheck()) return;
    this.jsonValue = '';
    this.ionFocus();
  }

  // json 输入值变更
  ionFocus() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  // 空 check
  nullCheck() {
    if (this.jsonValue.trim() === '') {
      this.successMessage = '';
      this.errorMessage = '请输入需要转换的json字符串!';
      return true;
    }
    return false;
  }

  // 值替换
  replace(value: string) {
    const unixs = value.split('\n');
    const wins = value.split('\r\n');
    let values = [];
    if (unixs.length > wins.length) {
      values = unixs;
    } else {
      values = wins;
    }
    let replaceValue = '';
    values.filter((a: string) => a.trim() !== '').forEach((b: string) => {
      if (replaceValue === '') {
        replaceValue += '("' + b + '"';
      } else {
        replaceValue += ', "' + b + '"';
      }
    });
    return replaceValue + ')';
  }
}
