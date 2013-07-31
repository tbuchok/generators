def evens(array)
  Enumerator.new do |y|
    array.each { |i| y << i if i % 2 == 0 }
  end
end

list = (1..10).to_a

evens(list).each do |i|
  p i
end