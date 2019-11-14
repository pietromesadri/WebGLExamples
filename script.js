function main() {
  const canvas = document.querySelector("#glCanvas");
  const gl = canvas.getContext("webgl");

  const vsSource = getVertexShader();
  const fsSource = getFragmentShader();

  var then = 0;
  var squareRotation = 0.0;

  if (gl === null) {
    alert("Unable to initialize WebGL!");
    return;
  }

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };
  
  const buffers = initBuffers(gl);
  //drawScene(gl, programInfo, buffers, );
  function render(now) {
    now *= 0.001;
    const deltaTime = now - then;
    then = now;
  
    drawScene(gl, programInfo, buffers, deltaTime, squareRotation);
  
    requestAnimationFrame(render);
    squareRotation += deltaTime;
  }
  requestAnimationFrame(render);
}


main();