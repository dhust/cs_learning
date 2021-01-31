---
id: conditionals-py
title: Conditionals
sidebar_label: Intro
---

## if
```python
  if secret == 12:
    print("You Win!")
```

## elif
```python
  if secret == 12:
    print("You Win!")
  elif secret < 12:
    print("Too Low")
  elif secret > 12:
    print("Too High")
```

## else
### example 1
```python
  if secret == 12:
    print("You Win!")
  elif secret < 12:
    print("Too Low")
  elif secret > 12:
    print("Too High")
  else:
    print("Invalid Input")
```

### example 2
```python
  if secret == 12:
    print("You Win!")
  else: 
    print("You Lose")
```