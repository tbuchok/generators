def evens(array)
  Enumerator.new do |y|
    array.each do |i|
      y << i if i % 2 == 0
    end
  end
end

evens((1..10).to_a).each do |i|
  p i
end