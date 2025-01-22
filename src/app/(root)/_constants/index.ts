import { Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { Theme } from "../../../types";

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  bash: {
  id: "bash",
  label: "bash",
  logoPath: "/bash.png",
  pistonRuntime: { language: "bash", version: "5.2.0" },
  monacoLanguage: "bash",
  defaultCode: `# Bash Playground
numbers=(1 2 3 4 5)
# Map numbers to their squares
squares=()
for n in \${numbers[@]}; do
  squares+=(\$((n * n)))
done
echo "Original numbers: \${numbers[@]}"
echo "Squared numbers: \${squares[@]}"

# Filter even numbers
evenNumbers=()
for n in \${numbers[@]}; do
  if ((n % 2 == 0)); then
    evenNumbers+=(\$n)
  fi
done
echo "Even numbers: \${evenNumbers[@]}"

# Calculate sum
sum=0
for n in \${numbers[@]}; do
  sum=\$((sum + n))
done
echo "Sum of numbers: \$sum"`,
},
 dart: {
  id: "dart",
  label: "Dart",
  logoPath: "/dart.png",
  pistonRuntime: { language: "dart", version: "2.19.6" },
  monacoLanguage: "dart",
  defaultCode: `// Dart Playground
  void main() {
  var numbers = [1, 2, 3, 4, 5];

  // Map numbers to their squares
  var squares = numbers.map((n) => n * n).toList();
  print("Original numbers: $numbers");
  print("Squared numbers: $squares");

  // Filter for even numbers
  var evenNumbers = numbers.where((n) => n % 2 == 0).toList();
  print("Even numbers: $evenNumbers");

  // Calculate sum using reduce
  var sum = numbers.reduce((acc, curr) => acc + curr);
  print("Sum of numbers: $sum");
}`,
 },
  haskell: {
    id: "haskell",
    label: "Haskell",
    logoPath: "/haskell.png",
    pistonRuntime: { language: "haskell", version: "9.0.1" },
    monacoLanguage: "haskell",
    defaultCode: `-- Haskell Playground
    main :: IO ()
    main = do
    let numbers = [1, 2, 3, 4, 5]

    -- Map numbers to their squares
    let squares = map (^2) numbers
    putStrLn $ "Original numbers: " ++ show numbers
    putStrLn $ "Squared numbers: " ++ show squares

    -- Filter for even numbers
    let evenNumbers = filter even numbers
    putStrLn $ "Even numbers: " ++ show evenNumbers

    -- Calculate sum using foldl
    let sum = foldl (+) 0 numbers
    putStrLn $ "Sum of numbers: " ++ show sum`,
  },
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" }, // api that we're gonna be using
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Calculate sum using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`,
  },
  kotlin: {
    id: "kotlin",
    label: "Kotlin",
    logoPath: "/kotlin.png",
    pistonRuntime: { language: "kotlin", version: "1.8.20" },
    monacoLanguage: "kotlin",
    defaultCode: `//Kotlin Playground
    fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)

    // Map numbers to their squares
    val squares = numbers.map { it * it }
    println("Original numbers: $numbers")
    println("Squared numbers: $squares")

    // Filter for even numbers
    val evenNumbers = numbers.filter { it % 2 == 0 }
    println("Even numbers: $evenNumbers")

    // Calculate sum using reduce
    val sum = numbers.reduce { acc, curr -> acc + curr }
    println("Sum of numbers: $sum")
}`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
interface NumberArray {
  numbers: number[];
  sum(): number;
  squares(): number[];
  evenNumbers(): number[];
}

class MathOperations implements NumberArray {
  constructor(public numbers: number[]) {}

  sum(): number {
    return this.numbers.reduce((acc, curr) => acc + curr, 0);
  }

  squares(): number[] {
    return this.numbers.map(n => n * n);
  }

  evenNumbers(): number[] {
    return this.numbers.filter(n => n % 2 === 0);
  }
}

const math = new MathOperations([1, 2, 3, 4, 5]);

console.log('Original numbers:', math.numbers);
console.log('Squared numbers:', math.squares());
console.log('Even numbers:', math.evenNumbers());
console.log('Sum of numbers:', math.sum());`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `# Python Playground
numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")

# Filter for even numbers
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")

# Calculate sum
numbers_sum = sum(numbers)
print(f"Sum of numbers: {numbers_sum}")`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
      // Create array
      int[] numbers = {1, 2, 3, 4, 5};
      
      // Print original numbers
      System.out.print("Original numbers: ");
      printArray(numbers);
      
      // Calculate and print squares
      int[] squares = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
          squares[i] = numbers[i] * numbers[i];
      }
      System.out.print("Squared numbers: ");
      printArray(squares);
      
      // Print even numbers
      System.out.print("Even numbers: ");
      for (int n : numbers) {
          if (n % 2 == 0) System.out.print(n + " ");
      }
      System.out.println();
      
      // Calculate and print sum
      int sum = 0;
      for (int n : numbers) sum += n;
      System.out.println("Sum of numbers: " + sum);
  }
  
  private static void printArray(int[] arr) {
      for (int n : arr) System.out.print(n + " ");
      System.out.println();
  }
}`,
  },
  julia: {
    id: "julia",
    label: "Julia",
    logoPath: "/julia.png",
    pistonRuntime: { language: "julia", version: "1.8.5" },
    monacoLanguage: "julia",
    defaultCode: `# Julia Playground
    numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = map(x -> x^2, numbers)
println("Original numbers: ", numbers)
println("Squared numbers: ", squares)

# Filter for even numbers
even_numbers = filter(x -> x % 2 == 0, numbers)
println("Even numbers: ", even_numbers)

# Calculate sum
sum_numbers = sum(numbers)
println("Sum of numbers: ", sum_numbers)`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

func main() {
  // Create slice
  numbers := []int{1, 2, 3, 4, 5}
  
  // Print original numbers
  fmt.Println("Original numbers:", numbers)
  
  // Calculate squares
  squares := make([]int, len(numbers))
  for i, n := range numbers {
      squares[i] = n * n
  }
  fmt.Println("Squared numbers:", squares)
  
  // Filter even numbers
  var evenNumbers []int
  for _, n := range numbers {
      if n%2 == 0 {
          evenNumbers = append(evenNumbers, n)
      }
  }
  fmt.Println("Even numbers:", evenNumbers)
  
  // Calculate sum
  sum := 0
  for _, n := range numbers {
      sum += n
  }
  fmt.Println("Sum of numbers:", sum)
}`,
  },
  powershell: {
    id: "powershell",
    label: "PowerShell",
    logoPath: "/powershell.png",
    pistonRuntime: { language: "powershell", version: "7.1.4" },
    monacoLanguage: "powershell",
    defaultCode: `#PowerShell Playground
    $numbers = @(1, 2, 3, 4, 5)

# Map numbers to their squares
$squares = $numbers | ForEach-Object { $_ * $_ }
Write-Output "Original numbers: $numbers"
Write-Output "Squared numbers: $squares"

# Filter even numbers
$evenNumbers = $numbers | Where-Object { $_ % 2 -eq 0 }
Write-Output "Even numbers: $evenNumbers"

# Calculate sum
$sum = $numbers | Measure-Object -Sum | Select-Object -ExpandProperty Sum
Write-Output "Sum of numbers: $sum"`,
  },
  racket: {
    id: "racket",
    label: "Racket",
    logoPath: "/racket.png",
    pistonRuntime: { language: "racket", version: "8.3.0" },
    monacoLanguage: "racket",
    defaultCode: `; Racket Playground
    #lang racket

(define numbers '(1 2 3 4 5))

; Map numbers to their squares
(define squares (map (λ (n) (* n n)) numbers))
(displayln (string-append "Original numbers: " (format "~a" numbers)))
(displayln (string-append "Squared numbers: " (format "~a" squares)))

; Filter for even numbers
(define even-numbers (filter even? numbers))
(displayln (string-append "Even numbers: " (format "~a" even-numbers)))

; Calculate sum
(define sum (foldl + 0 numbers))
(displayln (string-append "Sum of numbers: " (format "~a" sum)))
`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    // Create vector
    let numbers = vec![1, 2, 3, 4, 5];
    
    // Print original numbers
    println!("Original numbers: {:?}", numbers);
    
    // Calculate squares
    let squares: Vec<i32> = numbers
        .iter()
        .map(|&n| n * n)
        .collect();
    println!("Squared numbers: {:?}", squares);
    
    // Filter even numbers
    let even_numbers: Vec<i32> = numbers
        .iter()
        .filter(|&&n| n % 2 == 0)
        .cloned()
        .collect();
    println!("Even numbers: {:?}", even_numbers);
    
    // Calculate sum
    let sum: i32 = numbers.iter().sum();
    println!("Sum of numbers: {}", sum);
}`,
  },
  r: {
    id: "r",
    label: "R",
    logoPath: "/r.png",
    pistonRuntime: { language: "rscript", version: "4.1.1" },
    monacoLanguage: "r",
    defaultCode: `# Define the numbers vector
numbers <- c(1, 2, 3, 4, 5)

# Map numbers to their squares
squares <- sapply(numbers, function(n) n^2)
cat("Original numbers:", numbers, "\n")
cat("Squared numbers:", squares, "\n")

# Filter for even numbers
evenNumbers <- numbers[numbers %% 2 == 0]
cat("Even numbers:", evenNumbers, "\n")

# Calculate sum using reduce
sum <- sum(numbers)
cat("Sum of numbers:", sum, "\n")
`,
  },
  crystal: {
    id: "crystal",
    label: "Crystal",
    logoPath: "/crystal.png",
    pistonRuntime: { language: "crystal", version: "0.36.1" },
    monacoLanguage: "crystal",
    defaultCode: `# Crystal Playground
    numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = numbers.map { |n| n * n }
puts "Original numbers: #{numbers}"
puts "Squared numbers: #{squares}"

# Filter for even numbers
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers}"

# Calculate sum
sum = numbers.reduce(0) { |acc, curr| acc + curr }
puts "Sum of numbers: #{sum}"`,
  },
  c: {
    id: "c",
    label: "C",
    logoPath: "/c.png",
    pistonRuntime: {language: "c", version: "10.2.0" },
    monacoLanguage: "c",
    defaultCode: `#include <stdio.h>

int main() {
    // Create an array
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    // Print original numbers
    printf("Original numbers: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("");
    
    // Calculate squares
    int squares[size];
    for (int i = 0; i < size; i++) {
        squares[i] = numbers[i] * numbers[i];
    }
    
    printf("Squared numbers: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", squares[i]);
    }
    printf("");
    
    // Filter even numbers
    printf("Even numbers: ");
    for (int i = 0; i < size; i++) {
        if (numbers[i] % 2 == 0) {
            printf("%d ", numbers[i]);
        }
    }
    printf("");
    
    // Calculate sum
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += numbers[i];
    }
    printf("Sum of numbers: %d", sum);
    
    return 0;
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    // Create vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Print original numbers
    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;
    
    // Calculate squares
    std::vector<int> squares;
    std::transform(numbers.begin(), numbers.end(), 
                  std::back_inserter(squares),
                  [](int n) { return n * n; });
    
    std::cout << "Squared numbers: ";
    for (int n : squares) std::cout << n << " ";
    std::cout << std::endl;
    
    // Filter even numbers
    std::cout << "Even numbers: ";
    for (int n : numbers) {
        if (n % 2 == 0) std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Calculate sum
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Sum of numbers: " << sum << std::endl;
    
    return 0;
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;

class Program {
    static void Main() {
        // Create array
        int[] numbers = { 1, 2, 3, 4, 5 };
        
        // Print original numbers
        Console.WriteLine($"Original numbers: {string.Join(" ", numbers)}");
        
        // Calculate squares
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squared numbers: {string.Join(" ", squares)}");
        
        // Filter even numbers
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even numbers: {string.Join(" ", evenNumbers)}");
        
        // Calculate sum
        var sum = numbers.Sum();
        Console.WriteLine($"Sum of numbers: {sum}");
    }
}`,
  },
  php: {
    id: "php",
    label: "PHP",
    logoPath: "/php.png",
    pistonRuntime: {language: "php", version: "8.2.3" },
    monacoLanguage: "php",
    defaultCode: `<?php
$numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
$squares = array_map(function($n) {
    return $n * $n;
}, $numbers);
echo "Original numbers: " . implode(", ", $numbers) . PHP_EOL;
echo "Squared numbers: " . implode(", ", $squares) . PHP_EOL;

// Filter for even numbers
$evenNumbers = array_filter($numbers, function($n) {
    return $n % 2 === 0;
});
echo "Even numbers: " . implode(", ", $evenNumbers) . PHP_EOL;

// Calculate sum using reduce
$sum = array_reduce($numbers, function($acc, $curr) {
    return $acc + $curr;
}, 0);
echo "Sum of numbers: $sum" . PHP_EOL;
?>`,
  },
  pascal: {
    id: "pascal",
    label: "Pascal",
    logoPath: "/pascal.png",
    pistonRuntime: { language: "pascal", version: "3.2.2"},
    monacoLanguage: "pascal",
    defaultCode: `program Playground;

uses
  SysUtils;

var
  numbers: array[1..5] of Integer = (1, 2, 3, 4, 5);
  squares: array[1..5] of Integer;
  evenNumbers: array[1..5] of Integer;
  i, count, sum: Integer;

begin
  // Map numbers to their squares
  for i := 1 to 5 do
    squares[i] := numbers[i] * numbers[i];

  Write('Original numbers: ');
  for i := 1 to 5 do
    Write(numbers[i], ' ');
  WriteLn;

  Write('Squared numbers: ');
  for i := 1 to 5 do
    Write(squares[i], ' ');
  WriteLn;

  // Filter for even numbers
  count := 0;
  for i := 1 to 5 do
    if numbers[i] mod 2 = 0 then
    begin
      Inc(count);
      evenNumbers[count] := numbers[i];
    end;

  Write('Even numbers: ');
  for i := 1 to count do
    Write(evenNumbers[i], ' ');
  WriteLn;

  // Calculate sum using reduce
  sum := 0;
  for i := 1 to 5 do
    sum := sum + numbers[i];

  WriteLn('Sum of numbers: ', sum);
end.`,
  },
  perl: {
    id: "perl",
    label: "Perl",
    logoPath: "/perl.png",
    pistonRuntime: { language: "perl", version: "5.36.0" },
    monacoLanguage: "perl",
    defaultCode: `use strict;
use warnings;

my @numbers = (1, 2, 3, 4, 5);

# Map numbers to their squares
my @squares = map { $_ * $_ } @numbers;
print "Original numbers: ", join(", ", @numbers), "\n";
print "Squared numbers: ", join(", ", @squares), "\n";

# Filter for even numbers
my @even_numbers = grep { $_ % 2 == 0 } @numbers;
print "Even numbers: ", join(", ", @even_numbers), "\n";

# Calculate sum using reduce
use List::Util qw(reduce);
my $sum = reduce { $a + $b } @numbers;
print "Sum of numbers: $sum\n";`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `# Create array
numbers = [1, 2, 3, 4, 5]

# Print original numbers
puts "Original numbers: #{numbers.join(' ')}"

# Calculate squares
squares = numbers.map { |n| n * n }
puts "Squared numbers: #{squares.join(' ')}"

# Filter even numbers
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers.join(' ')}"

# Calculate sum
sum = numbers.sum
puts "Sum of numbers: #{sum}"`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `// Create array
let numbers = [1, 2, 3, 4, 5]

// Print original numbers
print("Original numbers: \\(numbers)")

// Calculate squares
let squares = numbers.map { $0 * $0 }
print("Squared numbers: \\(squares)")

// Filter even numbers
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print("Even numbers: \\(evenNumbers)")

// Calculate sum
let sum = numbers.reduce(0, +)
print("Sum of numbers: \\(sum)")`,
  },
  zig: {
    id: "zig",
    label: "Zig",
    logoPath: "/zig.png",
    pistonRuntime: { language: "zig", version: "0.10.1" },
    monacoLanguage: "zig",
    defaultCode: `//Zig Playground
    const std = @import("std");

pub fn main() !void {
    const numbers = [_]i32{1, 2, 3, 4, 5};

    // Map numbers to their squares
    var squares: [5]i32 = undefined;
    for (numbers) |n, i| squares[i] = n * n;
    std.debug.print("Original numbers: {}\n", .{numbers});
    std.debug.print("Squared numbers: {}\n", .{squares});

    // Filter even numbers
    var evenNumbers: []i32 = &[_]i32{2, 4}; // Zig does not dynamically allocate arrays easily
    std.debug.print("Even numbers: {}\n", .{evenNumbers});

    // Calculate sum
    var sum: i32 = 0;
    for (numbers) |n| sum += n;
    std.debug.print("Sum of numbers: {}\n", .{sum});
}`,
  },
};

export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

export const THEME_DEFINITONS: Record<string, editor.IStandaloneThemeData> = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
      base: themeData.base,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};
