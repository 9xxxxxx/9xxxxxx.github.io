---
title: "Pandas Optimization: 10x Your Data Processing Speed"
date: "2024-03-20"
description: "Stop using loops in Python. Learn vectorization and efficient memory management techniques for large datasets."
tags: ["Python", "Pandas", "Performance"]
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
---

# Why is my code so slow?

If you are a data analyst moving from Excel to Python, you might find yourself writing `for` loops to iterate over rows. This is the #1 reason for slow scripts.

## The Power of Vectorization

Pandas is built on top of NumPy, which is optimized for **vectorized operations**. This means performing operations on entire arrays at once, rather than one element at a time.

### Bad Practice (Looping)

```python
import pandas as pd
import time

df = pd.DataFrame({'a': range(1000000), 'b': range(1000000)})

start = time.time()
res = []
for i in range(len(df)):
    res.append(df.iloc[i]['a'] + df.iloc[i]['b'])
df['c'] = res
print(f"Loop time: {time.time() - start:.4f}s")
```

### Good Practice (Vectorization)

```python
start = time.time()
df['c'] = df['a'] + df['b']
print(f"Vectorized time: {time.time() - start:.4f}s")
```

**Result:** The vectorized version is usually **1000x faster**.

## Memory Management

Another common issue is loading a 10GB CSV into 8GB of RAM.

1.  **Use `chunksize`**: Process data in small batches.
2.  **Downcast Types**: Convert `float64` to `float32` and `int64` to `int32` where possible.
3.  **Use Parquet**: Stop using CSV for storage. Parquet is compressed and preserves schema.

```python
# Save as Parquet
df.to_parquet('data.parquet')

# Read Parquet
df = pd.read_parquet('data.parquet')
```

Happy coding!
