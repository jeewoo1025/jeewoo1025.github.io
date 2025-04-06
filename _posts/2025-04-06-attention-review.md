---
layout: post
title: [Paper Review] Attention Is All You Need
date: 2025-04-06 21:00:00
description: Questions About Transformer
tags: Research
categories: llms
tabs: true
---

## 💁🏻‍♀️ My Review
> Paper: [Attention Is All You Need](https://arxiv.org/abs/1706.03762v5)

In 2017, Google introduced the most powerful language model called **Transformer**. Transformer follows an encoder-decoder structure and uses residual-connected feedforward networks with attention layers in between. It's defined by three core components as follows:

- Multi-head Attention
- Scaled Dot-Product Attention
- Positional Encoding

✨ What impressed me most was how Transformer achieved a strong understanding of a context using attention mechanisms. It's no surprise that most of today’s SOTA language models are based on Transformers.

<br>

## 🧠 Questions About Transformer
#### 1. Why do we use a Feedforward Network?
This is because expanding the dimensionality allows the model to perform richer computations. This helps uncover hidden patterns or features that may not be captured otherwise. It's like giving the model more space to think.

#### 2. Why is it called a Position-wise Feedforward Network?
When I looked into the code, it seemed pretty much like a regular feedforward network. 🤔 So why call it “position-wise”? 

> In my opinion, the authors probably wanted to emphasize that the operation is applied independently to each token (i.e., "position") with its own set of weights. Even though the structure is the same, each token gets its own transformation individually.

#### 3. What are Residual Connections and Layer Normalization, and why are they used?
A residual connection adds the input `x` to the output of a layer `F(x)`, resulting in `x + F(x)`.

❓ Why use it?
> If you take the derivative of `x + F(x)` with respect to `x`, you always get at least `1`. This helps mitigate the vanishing gradient problem, especially in deep neural networks. 
<br>

❓ Why use it?
> Even if inputs are normalized at the input layer, as they pass through hidden layers, their distribution tends to shift. This can push activations into saturation zones (where gradients vanish). Layer normalization helps maintain a balanced distribution for effective backpropagation. 💪

#### 4. What exactly is Positional Encoding?
Since Transformers don’t process tokens sequentially like RNNs, they need some ways to understand token order. That’s where positional encoding comes in.

It generates a unique position vector of shape `(1, d_model)` for each token using sine and cosine functions.

❓ Why is it important?
> RNNs naturally process words in order, so they "know" where each word appears. However, Transformers process all tokens in parallel. So, positional encodings inject information about word order into the input representations.

#### 5. Why do we use the Attention Mechanism?
Self-attention compares a token to all others in the input context to find the most relevant ones using dot products. This allows each token to "focus" on parts of the context that are semantically important to it.

❓ Why is this valuable?
> This is because we can understand which parts of the input a token attends to most. As we go deeper into the encoder layers, tokens generally develop stronger attentions to contextually important words.

❓ What are semantically similar tokens?
> Words that have related meanings and tend to appear in similar contexts. In vector space, they lie close to each other.

<br>

## 🧾 Recommended PyTorch Transformer Codebases
- [PyTorch Official Tutorial](https://pytorch.org/tutorials/beginner/transformer_tutorial.html)
- [The Annotated Transformer by Harvard NLP](http://nlp.seas.harvard.edu/2018/04/03/attention.html)
- [paul-hyun/transformer-evolution](https://github.com/paul-hyun/transformer-evolution)
- [tunz/transformer-pytorch](https://github.com/tunz/transformer-pytorch)