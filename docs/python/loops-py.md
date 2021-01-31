---
id: loops-py
title: Loops
sidebar_label: For
---

## for

### One Value

If only one value is given, then that's the ending number.
1. Starts at 0
2. Ends one before the number in parentheses (e.g. 4 - 1 = 3)

```python
  for i in range(4):
    print(i)

  ## Output: ##
  # 0
  # 1
  # 2
  # 3
```

### Two Values

If two values are given,
1. Starts at the first value
2. Ends one before the second value

```python
  for i in range(2, 5):
    print(i)

  ## Output: ##
  # 2
  # 3
  # 4
```

### Three Values

If three values are given,
1. Starts at the first value
2. Ends one before the second value
3. Third value is what it increments by

```python
  for i in range(4, 13, 3):
    print(i)

  ## Output: ##
  # 4
  # 7
  # 10

  # Note: It didn't print 13 because it goes "up to" 13, but doesn't include it
```