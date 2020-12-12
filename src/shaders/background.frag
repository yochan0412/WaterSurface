#version 430 core
out vec4 f_color;

in vec3 o_position;

uniform samplerCube u_skybox;
uniform sampler2D u_texture;

void main()
{   
    vec3 color = vec3(texture(u_skybox, normalize(o_position)));
	f_color = vec4(color, 1.0);
}