package foo

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test(test *testing.T) {
	assert := assert.New(test)
	t := Trie{&Node{
		0, false, make(map[rune]*Node),
	}}
	assert.False(t.Remove("food"), "Can not remove")

	words := []string{"a", "at", "has", "hat", "he", "me", "men", "mens", "met"}
	for _, word := range words {
		t.Insert(word)
	}
	foundWords := t.ListWords()
	assert.Equal(len(words), len(foundWords), "Word list length same")
	for _, word := range foundWords {
		assert.True(t.Find(word))
	}

	t.Remove("me")
	wordsRemoved := []string{"me"}
	words = []string{"a", "at", "has", "hat", "he", "men", "mens", "met"}
	for _, word := range words {
		assert.True(t.Find(word))
	}
	for _, word := range wordsRemoved {
		assert.False(t.Find(word))
	}

	t.Remove("mens")
	wordsRemoved = append(wordsRemoved, "mens")
	words = []string{"a", "at", "has", "hat", "he", "men", "met"}
	for _, word := range words {
		assert.True(t.Find(word))
	}
	for _, word := range wordsRemoved {
		assert.False(t.Find(word))
	}

	t.Remove("a")
	wordsRemoved = append(wordsRemoved, "a")
	words = []string{"at", "has", "hat", "he", "men", "met"}
	for _, word := range words {
		assert.True(t.Find(word))
	}
	for _, word := range wordsRemoved {
		assert.False(t.Find(word))
	}

	t.Remove("has")
	wordsRemoved = append(wordsRemoved, "has")
	words = []string{"at", "hat", "he", "men", "met"}
	for _, word := range words {
		assert.True(t.Find(word))
	}
	for _, word := range wordsRemoved {
		assert.False(t.Find(word))
	}
}

type Node struct {
	Key      rune
	IsWord   bool
	Children map[rune]*Node
}

type Trie struct {
	Root *Node
}

func (t *Trie) Find(word string) bool {
	curr := t.Root
	if curr == nil {
		return false
	}
	for _, char := range word {
		next := curr.Children[char]
		if next == nil {
			return false
		}
		curr = next
	}

	return curr.IsWord
}
func (t *Trie) Insert(word string) {
	if len(word) == 0 {
		return
	}
	if t.Root == nil {
		t.Root = &Node{
			0, false, make(map[rune]*Node),
		}
	}
	curr := t.Root
	for _, char := range word {
		next := curr.Children[char]
		if next == nil {
			next = &Node{
				char, false, make(map[rune]*Node),
			}
			curr.Children[char] = next
		}
		curr = next
	}
	curr.IsWord = true
}
func (t *Trie) Remove(word string) bool {
	curr := t.Root
	for _, char := range word {
		curr = curr.Children[char]
		if curr == nil {
			return false
		}
	}
	if curr.IsWord {
		curr.IsWord = false
		return true
	}
	return false
}
func (t *Trie) ListWords() []string {
	var res []string
	curr := t.Root
	for _, v := range curr.Children {
		res = append(res, help("", v)...)
	}
	return res
}

func help(s string, node *Node) []string {
	var res []string
	t := s + string(node.Key)
	if node.IsWord {
		res = append(res, t)
	}
	for _, v := range node.Children {
		res = append(res, help(t, v)...)
	}
	return res
}
