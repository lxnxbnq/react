/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5;

// TODO: Use symbols?
export const NoPriority = 0; // 文本框输入
export const ImmediatePriority = 1; // 本次调度结束需完成的任务
export const UserBlockingPriority = 2; // 动画过渡
export const NormalPriority = 3; // 交互反馈 
export const LowPriority = 4; // 数据更新 
export const IdlePriority = 5; // 不会显示但以防将来会显示的任务
