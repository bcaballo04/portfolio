document.getElementById('hsspLink').addEventListener('mouseover', function() {
    document.getElementById('hssp').style.display = 'block';
  });
  
  document.getElementById('hsspLink').addEventListener('mouseout', function() {
    document.getElementById('hssp').style.display = 'none';
  });

  document.getElementById('ycciLink').addEventListener('mouseover', function() {
    document.getElementById('ycci').style.display = 'block';
  });
  
  document.getElementById('ycciLink').addEventListener('mouseout', function() {
    document.getElementById('ycci').style.display = 'none';
  });

  document.getElementById('apaLink').addEventListener('mouseover', function() {
    document.getElementById('apa').style.display = 'block';
  });
  
  document.getElementById('apaLink').addEventListener('mouseout', function() {
    document.getElementById('apa').style.display = 'none';
  });


  window.addEventListener('scroll', function() {

    let ycci = document.querySelector('#ycci');
    let scrollPosition = window.scrollY;
    let documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight / 3.5) {
        ycci.style.top = '80%';
    } else {
        ycci.style.top = (15 + scrollPosition * 0.05) + '%';
    }
});