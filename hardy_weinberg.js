// Initial genotype frequencies

var a1a1 = 0.15
var a2a2 = 0.35
var a1a2 = 1 - (a1a1 + a2a2)

// Allele frequencies
var p = a1a1 + a1a2 * 0.5
var q = 1 - p
