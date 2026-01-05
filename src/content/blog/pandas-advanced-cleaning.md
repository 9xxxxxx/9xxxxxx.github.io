---
title: "Pandas 数据清洗实战：那些相见恨晚的高级技巧"
description: "告别低效的循环，掌握 Pandas 的 apply、transform 以及链式调用，让数据清洗效率提升 10 倍。"
date: "2026-01-15"
image: "/blog/pandas-cleaning.jpg"
tags: ["数据清洗", "Python", "Pandas"]
---

数据清洗（Data Cleaning）往往占据了数据分析项目 80% 的时间。很多初学者习惯使用 `for` 循环来处理 DataFrame，但这在大数据量下效率极低。本文将介绍几个 Pandas 的高级用法。

## 1. 矢量化操作 (Vectorization)

尽量避免使用循环。Pandas 的底层是 NumPy，利用矢量化操作可以瞬间处理百万级数据。

```python
# ❌ 低效写法
for i in range(len(df)):
    df.loc[i, 'new_col'] = df.loc[i, 'col1'] + df.loc[i, 'col2']

# ✅ 高效写法
df['new_col'] = df['col1'] + df['col2']
```

## 2. 强大的 `assign` 与链式调用 (Method Chaining)

为了让代码更具可读性，推荐使用链式调用。

```python
clean_df = (
    raw_df
    .dropna(subset=['id'])
    .assign(
        date=lambda x: pd.to_datetime(x['date_str']),
        revenue=lambda x: x['price'] * x['quantity']
    )
    .query('revenue > 0')
)
```

这种写法逻辑清晰，就像管道一样一步步处理数据。

## 3. 使用 `category` 类型节省内存

对于只有少数几个固定值（如性别、省份）的列，将其转换为 `category` 类型可以大幅减少内存占用。

```python
df['status'] = df['status'].astype('category')
```

掌握这些技巧，不仅能让你的代码跑得更快，还能让它看起来更专业。
