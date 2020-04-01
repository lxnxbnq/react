
## reconciliation 是如何对旧的虚拟DOM和新的虚拟DOM进行 diff 的

## 重新实现React Fiber的目的是什么？主要做了哪些工作？

## scheduling 是如何调度不同优先级的任务的（如数据更新，UI动画）
React实现调度的方式是给每一个fiber设置一个expirationTime，不同时间即代表不同优先级，expirationTime越短，则代表优先级越高。
> 所谓的到期时间（expirationTime），是相对于调度器初始调用的起始时间而言的一个时间段；调度器初始调用后的某一段时间内，需要调度完成这项更新，这个时间段长度值就是到期时间值。

随着时间的流逝，一个更新的优先级会越来越高，这样就可以避免 starvation 问题（即低优先级的工作一直被高优先级的工作打断，而无法完成）。

## 为什么React把10ms作为 1 unit？
React会针对每个更新计算一个Expiration Time， 以10ms作为unit size，说明在10ms内触发的多个更新，计算出来的优先级是一样的，也就是会被一起commit。
React可能认为这么做足以保持UI的响应性，而不用频繁commit。